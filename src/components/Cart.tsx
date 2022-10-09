import { FiShoppingBag } from "react-icons/fi";
import CartProduct from "./CartProduct";
import Cep from "./Cep";

const ProductCard = () => {
  return (
    <section className="product_card container">
      <div className="cart_products">
        <p className="cart_products_title">carrinho de compras</p>
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <div className="cart_price">
        <p className="cart_products_title">finalizar compra</p>
        <div className="cart_products_price_text">
          <span>sub-total</span>
          <span>R$ 2.499,00</span>
        </div>
        <Cep />
        <button className="btn">
          <FiShoppingBag />
          finalizar
        </button>
        <button className="btn_secondary">
          <FiShoppingBag />
          ver mais
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
