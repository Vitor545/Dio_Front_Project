import Card from "../components/CardContainer";
import Departments from "../components/Departments";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/CarouselHero2";

function Home() {
  return (
    <div>
      <Departments />
      <Carousel />
      <Card />
      <Carousel2 />
      <Card />
    </div>
  );
}

export default Home;
