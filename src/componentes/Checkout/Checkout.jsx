import React, {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import {db} from '../../services/config'



const Checkout = () => {
    const {carrito, total, vaciarCarrito} = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [pedidoId, setPedidoId] = useState('');

    const manejarCompra = (e) => {
        e.preventDedault();

        const orden = {
            cliente: {
                nombre,
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
            fecha: new Date()
        }
        
        const pedidosRef = collection(db,'pedidos')

        addDoc(pedidosRef, orden)
        .then((doc) =>{
            setPedidoId(doc.id)
            vaciarCarrito()
        })
        .catch((error) => console.error('Error al generar la orden:', error))
    }

    if (pedidoId){
        return (
            <div>
                <h2> Gracias por tu compra! </h2>
                <p>Tu numero de pedido es: <strong>{pedidoId}</strong></p>
                
            </div>
        )

    }
  return (
    <div>
        <h2>Finalizar compra </h2>
        <form>
            

        </form>
    </div>
  )
}

export default Checkout