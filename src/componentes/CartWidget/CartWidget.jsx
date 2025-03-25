import { ShoppingCart } from "lucide-react";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="widget-carrito">
      <ShoppingCart size={24} strokeWidth={2} />
    </div>
  );
};

export default CartWidget;
