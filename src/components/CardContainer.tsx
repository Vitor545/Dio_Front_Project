import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CardContainer = ({ value }: any) => {
  return (
    <div className="container card_main_container">
      <Carousel responsive={responsive}>
        {value?.map(({ img, preco, id, title }: any) => (
          <Card key={id} img={img} preco={preco} id={id} title={title} />
        ))}
      </Carousel>
    </div>
  );
};

export default CardContainer;
