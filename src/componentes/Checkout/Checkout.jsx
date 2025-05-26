import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";



const Checkout = () => {
  const { carrito, total, resetCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [pedidoId, setPedidoId] = useState("");
  const [procesando, setProcesando] = useState(false);

  const manejarCompra = async (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email) {
      setError(
        "Por favor complete todos los campos antes de continuar con la compra..."
      );
      return;
    }

    if (procesando) return;
      setProcesando(true);
      setError("");

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

    try {
      await Promise.all(
        orden.items.map(async (articuloOrden) => {
          const articuloRef = doc(db, "articulos", articuloOrden.id);
          const articuloDoc = await getDoc(articuloRef);
          const stockActual = articuloDoc.data().stock;

          await updateDoc(articuloRef, {
            stock: stockActual - articuloOrden.cantidad,
          });
        })
      );

      const pedidosRef = collection(db, "pedidos");
      const docRef = await addDoc(pedidosRef, orden);

      setPedidoId(docRef.id);
      resetCarrito();
    } catch (error) {
      setError("Se produjo un error al procesar tu pedido. Inténtalo nuevamente.");
      setProcesando(false);
    }
  };

  if (pedidoId) {
    return (
      <div className="checkoutContainer">
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Tu número de pedido es: <strong>{pedidoId}</strong>. Un vendedor lo contactara para efectuar el pago...
          
        </p>
      </div>
    );
  }

  return (
    <div className="checkoutContainer">
      <h2>Finalizar compra</h2>
      <form onSubmit={manejarCompra} className="checkoutForm">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          disabled={procesando}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          disabled={procesando}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          disabled={procesando}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={procesando}
        />

        <button type="submit" disabled={procesando}>
          {procesando ? "Procesando..." : "Comprar"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      <div className="resumenContainer">
        <h3>Resumen de tu carrito</h3>
        {carrito.map((art) => (
          <div key={art.item.id}>
            <p>
              {art.item.nombre} x {art.cantidad} = ${art.item.precio * art.cantidad}
            </p>
          </div>
        ))}
        <h4>Total: ${total}</h4>
      </div>
    </div>
  );
};

export default Checkout;
