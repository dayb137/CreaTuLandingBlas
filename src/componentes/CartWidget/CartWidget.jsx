import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {totalArticulos} = useContext(CartContext)
  return (
    <Link to="/cart" className="widgetCarrito">
      <ShoppingCart size={24} strokeWidth={2}/>
      {totalArticulos > 0 && (
        <span>{totalArticulos}</span>
      )}
    </Link>
  );
};

export default CartWidget;
