import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductCadastrados } from "../lib/api";
import CartProduct from "./CartProductCadastrado";

const ProductCadastrados = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState<any>();
  const [loading, setLoading] = useState(true);

  const requestProducts = async () => {
    const dataU = JSON.parse(localStorage.getItem("user") as string);
    if (!dataU) {
      return navigate("/login");
    }
    const { id } = dataU;
    const request: any = await getProductCadastrados(id);
    setValue(request);
    setLoading(false);
  };

  useEffect(() => {
    requestProducts();
  }, []);

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
      <div className="cart_products produtos_cadastrados">
        <p className="cart_products_title">produtos cadastrados</p>
        {value.map(({ title, preco, img, id }: any) => (
          <CartProduct
            isOrders
            key={id}
            title={title}
            preco={preco}
            img={img}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCadastrados;
