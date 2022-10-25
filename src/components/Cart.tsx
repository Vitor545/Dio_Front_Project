import { FiShoppingBag } from "react-icons/fi";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import Cep from "./Cep";
import { createOrders } from "../lib/api";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

const ProductCard = () => {
  const navigation = useNavigate();
  const isCart = JSON.parse(localStorage.getItem("cart") as string);
  const { state, setStateGlobal } = useContext(CartContext);
  let result;

  if (isCart) {
    const final = isCart.map((item: any) => item.preco * item.quantity);
    result = final.reduce((acc: any, item: any) => acc + item);
  } else {
    result = 0;
  }

  const onFinish = async () => {
    const dataU = JSON.parse(localStorage.getItem("user") as string);
    if (!dataU) {
      return navigation("/login");
    }
    const { token, id } = dataU;
    const pedidos = localStorage.getItem("cart") as string;
    await createOrders(token, id, pedidos);
    localStorage.removeItem("cart");
    setStateGlobal({
      ...state,
      cart: 0,
    });
    return navigation("/orders");
  };

  return (
    <section className="product_card container">
      <div className="cart_products">
        <p className="cart_products_title">carrinho de compras</p>
        {isCart &&
          isCart.map((c: any) => (
            <CartProduct
              key={c.id}
              id={c.id}
              title={c.title}
              quantity={c.quantity}
              price={c.preco}
              img={c.img}
            />
          ))}
      </div>
      <div className="cart_price">
        <p className="cart_products_title">finalizar compra</p>
        <div className="cart_products_price_text">
          <span>sub-total</span>
          <span>R$ {result.toLocaleString('pt-BR')}</span>
        </div>
        <Cep />
        <button className="btn" onClick={onFinish}>
          <FiShoppingBag />
          finalizar
        </button>
        <button className="btn_secondary" onClick={() => navigation("/")}>
          <FiShoppingBag />
          ver mais
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
