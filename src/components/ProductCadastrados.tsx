import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartProduct from "./CartProductCadastrado";

const ProductCadastrados = () => {
  const navigate = useNavigate();

  async function locationRoute() {
    const dataU = JSON.parse(localStorage.getItem("user") as string);
    if (!dataU) {
      return navigate("/");
    }
    return navigate("/produtoscadastrados");
  }

  useEffect(() => {
    locationRoute();
  }, [navigate]);

  return (
    <section className="product_card container">
      <div className="cart_products produtos_cadastrados">
        <p className="cart_products_title">produtos cadastrados</p>
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
    </section>
  );
};

export default ProductCadastrados;
