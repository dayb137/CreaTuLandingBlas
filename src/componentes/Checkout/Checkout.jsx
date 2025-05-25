import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/config";

const Checkout = () => {
  const { carrito, total, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [pedidoId, setPedidoId] = useState("");

  const manejarCompra = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email) {
      setError(
        "Por favor complete todos los campos antes de continuar con la compra"
      )
      return;
    }

    const orden = {
      cliente: {
        nombre,
        apellido,
        telefono,
        email,
      },

      items: carrito.map((art) => ({
        id: art.item.id,
        nombre: art.item.nombre,
        cantidad: art.cantidad,
        precio: art.item.precio,
      })),

      total,
      fecha: new Date(),
    };

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, orden)
      .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito();
      })
      .catch((error) => {
        setError("Se produjo un error al cargar tu pedido");
      })
  };

  if (pedidoId) {
    return (
      <div>
        <h2> Gracias por tu compra! </h2>
        <p>
          Tu numero de pedido es: <strong>{pedidoId}</strong>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2>Finalizar compra </h2>
      <form onSubmit={manejarCompra}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefono"
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electronico"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Comprar</button>
      </form>
      <div>
        <h3>Resumen de tu carrito</h3>
        {carrito.map((art) => (
          <div key={art.item.id}>
            <p>
              {art.item.nombre} x {art.cantidad} = $
              {art.item.precio * art.cantidad}
            </p>
          </div>
        ))}
        <h4>Total: ${total}</h4>
      </div>
    </div>
  );
};

export default Checkout;