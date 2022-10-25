import Card from "../components/CardContainer";
import Departments from "../components/Departments";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/CarouselHero2";
import { useEffect, useState } from "react";
import { getProductByTag } from "../lib/api";

function Home() {
  const [videoGames, setVideoGames] = useState();
  const [televisor, setTelevisor] = useState();
  const [loading, setLoading] = useState(true);

  const requestProducts = async () => {
    const requestVideo: any = await getProductByTag("video games");
    const requestTelevisor: any = await getProductByTag("televisões");
    setVideoGames(requestVideo.userModel);
    setTelevisor(requestTelevisor.userModel);
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
      <Departments />
      <Carousel />
      <Card value={televisor} />
      <Carousel2 />
      <Card value={videoGames} />
    </div>
  );
}

export default Home;
