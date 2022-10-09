import { Component } from "react";
import Img from "../img/img_home3.jpg";
import Img2 from "../img/img_home4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        infiniteLoop
        interval={8000}
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
