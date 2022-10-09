import { Component } from "react";
import Img from "../img/recomendation.jpg";
import Img2 from "../img/recomendation2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        infiniteLoop
        interval={8000}
        className='container'
        showThumbs={false}
        showStatus={false}
        animationHandler={"fade"}
      >
        <div>
          <img src={Img} alt="img 10% de desconto" />
        </div>
        <div>
          <img src={Img2} alt="img ps5" />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
