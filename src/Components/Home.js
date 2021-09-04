import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import image2 from "./sidekix-media-WgkA3CSFrjc-unsplash.jpg";
import image3 from "./spacejoy-9M66C_w_ToM-unsplash-min.jpg";
import image4 from "./spacejoy-KJUGhE9ojro-unsplash-min.jpg";

function Home() {
  const mystyle = {
    height: "735px",
  };
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image2} style={mystyle} alt="image1" />
          <Carousel.Caption>
            <h3>Label for First slide</h3>
            <p>Sample Text for Image one</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image3} style={mystyle} alt="image2" />
          <Carousel.Caption>
            <h3>Label for Second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image4} style={mystyle} alt="image3" />
          <Carousel.Caption>
            <h3>Label for Third slide</h3>
            <p>Sample Text for Image Three</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Home;
