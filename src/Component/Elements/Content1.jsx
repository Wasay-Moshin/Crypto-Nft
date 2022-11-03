import React from "react";
function Content1() {
  return (
    <div className="content1">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div>
              <img className="img-fluid" src="Assets/c1.gif" alt="" />
            </div>
            <div className="card mt-3">
              <p>
                View Crypto.org Chain details{" "}
                <img src="Assets/arrow.svg" alt="" width={"15px"} />
              </p>
            </div>
            <div className="card mt-3">
              <p>
                View Cronoscan details{" "}
                <img src="Assets/arrow.svg" alt="" width={"15px"} />
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="hrt">
              <p>
                <img src="Assets/heart.svg" alt="" /> &nbsp; 0
              </p>

              <p>
                {" "}
                <img src="Assets/eye.svg" alt="" /> &nbsp; 87
              </p>
              <p>
                <img src="Assets/share.svg" alt="" />
                &nbsp; share
              </p>
             
            </div>
            <div className="px-3">
              <span>Chain &nbsp;<b>Cronos:</b> &nbsp;<img src="Assets/c.svg" alt="" /></span>

            </div>    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
