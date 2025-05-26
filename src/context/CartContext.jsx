import { createContext, useState} from 'react'

export const CartContext = createContext({
    carrito: [],
    total: 0,
    totalArticulos: 0
});

export function CartProvider ({children}) {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalArticulos, setTotalArticulos] = useState(0);

   


    const addItem = (item, cantidad) => {
        const existingItem = carrito.find( art => art.item.id === item.id)

        if(!existingItem){
            setCarrito(prevCart => [...prevCart, {item, cantidad}])
        } else {
            const cartActualizado = carrito.map(art => {
                return art.item.id === item.id
                ? {...art, cantidad: art.cantidad + cantidad} : art
            })
            setCarrito(cartActualizado) 
        }

        setTotalArticulos( prevCart => prevCart + cantidad)
        setTotal(prevCart => prevCart + (item.precio * cantidad))
        
    }

    const eliminarArticulo = (id) => {
        const articuloEliminado = carrito.find( art => art.item.id === id);
        
        if (!articuloEliminado) return;

        const carritoActualizado = carrito.filter(art => art.item.id !== id);

        setCarrito(carritoActualizado)
        setTotalArticulos(prevCart => prevCart - articuloEliminado.cantidad);
        setTotal(prevCart => prevCart - (articuloEliminado.item.precio * articuloEliminado.cantidad))
    }

    const resetCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setTotalArticulos(0);
    }

    return (
        <CartContext.Provider value = {{carrito, totalArticulos, total, addItem, eliminarArticulo, resetCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

