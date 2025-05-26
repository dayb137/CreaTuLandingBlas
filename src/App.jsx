
import "./App.css";
import "bootstrap";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./componentes/cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <>
      
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>      
      </CartProvider>
      <ToastContainer/>
      </BrowserRouter>

      
    </>
  );
};

export default App;
