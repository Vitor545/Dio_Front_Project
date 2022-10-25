import { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../lib/api";
import CartProduct from "./CartProduct";

const Orders = () => {
  const navigation = useNavigate();
  const [value, setValue] = useState<any>();
  const [result, setResult] = useState<any>(0);
  const [loading, setLoading] = useState(true);

  const requestProducts = async () => {
    const dataU = JSON.parse(localStorage.getItem("user") as string);
    if (!dataU) {
      return navigation("/login");
    }
    const { id } = dataU;
    const request: any = await getOrders(id);
    const test = request.map((p: any) => JSON.parse(p)[0]);
    setValue(test);
    if (test.length === 0) {
      setResult(0);
    } else {
      const final = test.map((item: any) => item.preco * item.quantity);
      setResult(final.reduce((acc: any, item: any) => acc + item));
    }
    setLoading(false);
  };

  useEffect(() => {
    requestProducts();
  }, []);

  if (loading) {
    return (
      <div
        className="product_cep"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "64px",
          border: 0,
        }}
      >
        <div
          className="loadingio-spinner-rolling-paoi0scu0kp"
          style={{ backgroundColor: "#E6E6E6" }}
        >
          <div className="ldio-hthev5xd2o7">
            <div></div>
          </div>
        </div>
        <span style={{ marginLeft: "16px" }}>carregando</span>
      </div>
    );
  }

  return (
    <section className="product_card container">
      <div className="cart_products">
        <p className="cart_products_title">meus pedidos</p>
        {value.map((c: any) => (
          <CartProduct
            isOrders
            key={c.id}
            id={c.id}
            title={c.title}
            quantity={c.quantity}
            price={c.preco}
            img={c.img}
          />
        ))}
      </div>
      <div className="cart_price orders">
        <p className="cart_products_title">detalhes da compra</p>
        <div className="cart_products_price_text">
          <span>sub-total</span>
          <span>R$ {result}</span>
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
