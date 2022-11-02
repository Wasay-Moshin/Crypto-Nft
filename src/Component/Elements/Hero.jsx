import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="container-fluid">
        <div className="mt-4 mb-4">
            <h4>Top Collection</h4>
        </div>
        <div className="row">
          <div className="col">
            <div className="card c1">
                <div className="img1">
                    <img className="img-fluid" src="Assets/h1.png" alt="" />
                    <p>Art Blocks</p>
                    <img src="Assets/tick.svg" alt="" />
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card c2">
            <div className="img1">
                    <img className="img-fluid" src="Assets/h2.png" alt="" />
                    <p style={{color:"white"}}>Mutant Ape..</p>
                    <img src="Assets/tick.svg" alt="" />
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card c3">
            <div className="img1">
                    <img className="img-fluid" src="Assets/h3.png" alt="" />
                    <p style={{color:"white"}}>Meebits</p>
                    <img src="Assets/tick.svg" alt="" />
                </div>
            </div>
          </div>{" "}
          <div className="col">
            <div className="card c4">
            <div className="img1">
                    <img className="img-fluid" src="Assets/h4.jpeg" alt="" />
                    <p style={{color:"white"}}>Otherdeed fo..</p>
                    <img src="Assets/tick.svg" alt="" />
                </div>
            </div>
          </div>{" "}
          <div className="col ">
            <div className="card c5">
            <div className="img1"> 
                    <img className="img-fluid" src="Assets/h5.jpeg" alt="" />
                    <p>Azuki</p>
                    <img src="Assets/tick.svg" alt="" />
                </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
        <h4>Explore </h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;
