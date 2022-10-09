import { Component } from "react";
import Img from "../img/img_home.jpg";
import Img2 from "../img/img_home2.jpg";
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
          <img src={Img} alt="img tv" />
        </div>
        <div>
          <img src={Img2} alt="img fogão" />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
