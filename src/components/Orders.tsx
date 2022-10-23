import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CartProduct from "./CartProduct";

const Orders = () => {
  const navigation = useNavigate();

  return (
    <section className="product_card container">
      <div className="cart_products">
        <p className="cart_products_title">meus pedidos</p>
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
        <CartProduct isOrders />
      </div>
      <div className="cart_price orders">
        <p className="cart_products_title">detalhes da compra</p>
        <div className="cart_products_price_text">
          <span>sub-total</span>
          <span>R$ 2.499,00</span>
        </div>
        <button className="btn_secondary" onClick={() => navigation("/")}>
          <FiShoppingBag />
          continuar comprando
        </button>
      </div>
    </section>
  );
};

export default Orders;
