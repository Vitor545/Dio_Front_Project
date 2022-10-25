import { useEffect, useState } from "react";
import Card from "../components/CardContainer";
import ProductCard from "../components/ProductCard";
import Recomendation from "../components/Recomedation";
import { getProductByTag } from "../lib/api";

function Product() {
  const [videoGames, setVideoGames] = useState();
  const [loading, setLoading] = useState(true);

  const requestProducts = async () => {
    const requestVideo: any = await getProductByTag("video games");
    setVideoGames(requestVideo.userModel);
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
    <div>
      <ProductCard />
      <Recomendation />
      <Card value={videoGames} />
    </div>
  );
}

export default Product;
