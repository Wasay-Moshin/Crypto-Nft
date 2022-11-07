import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Hero() {
  const responsive = {
    superLargeDesktop: {
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
  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="row">
        <div className="mt-3">
          <h4>Top Collection</h4>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          arrows={false}
          minimumTouchDrag={20}
          interval={1000}
        >
          <div>
            <div className="card c1">
              <div className="img1">
                <img className="img-fluid" src="Assets/h1.png" alt="" />
                <p>Art Blocks</p>
                <img src="Assets/tick.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="card c2">
              <div className="img1">
                <img className="img-fluid" src="Assets/h2.png" alt="" />
                <p style={{ color: "white" }}>Mutant Ape..</p>
                <img src="Assets/tick.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="card c3">
              <div className="img1">
                <img className="img-fluid" src="Assets/h3.png" alt="" />
                <p style={{ color: "white" }}>Meebits</p>
                <img src="Assets/tick.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="card c4">
              <div className="img1">
                <img className="img-fluid" src="Assets/h4.jpeg" alt="" />
                <p style={{ color: "white" }}>Otherdeed fo..</p>
                <img src="Assets/tick.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="card c5">
              <div className="img1">
                <img className="img-fluid" src="Assets/h5.jpeg" alt="" />
                <p>Azuki</p>
                <img src="Assets/tick.svg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="card c6">
              <div className="img1">
                <img className="img-fluid" src="Assets/c3-img.gif" alt="" />
                <p>RENGA</p>
                <img src="Assets/tick.svg" alt="" />
              </div>
            </div>
          </div>
        </Carousel>
       
      </div>
      </div>
    </div>
  );
}

export default Hero;
