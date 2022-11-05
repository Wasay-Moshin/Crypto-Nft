import React from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
function Carddata() {
  const { state } = useLocation();
  return (
    <div className="content1">
      <div className="container mt-5 mb-5">
        <div className="row ">
          <div className="col-md-4">
            <div>
              <img className="img-fluid" src={state.img} alt="" />
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
            <div>
              <Link to="/">
                {" "}
                <button className="back-btn">
                  {" "}
                  <IoIosArrowBack size={"15px"} color=" #1199faFF" />
                  Back
                </button>
              </Link>
            </div>
            <div className="hrt">
              <p>
                <img src={"Assets/heart.svg"} alt="" /> &nbsp; 0
              </p>

              <p>
                {" "}
                <img src="Assets/eye.svg" alt="" /> &nbsp;87
              </p>
              <p>
                <img src="Assets/share.svg" alt="" />
                &nbsp;share
              </p>
            </div>
            <div className="px-3">
              <span>
                Chain &nbsp;<b>Cronos:</b> &nbsp;
                <img src="Assets/c.svg" alt="" />
              </span>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card card1 px-2 mt-3">
                  <div>
                    <img
                      className="img-fluid"
                      src="Assets/c-blue.png"
                      alt=""
                      width={"50px"}
                    />
                    <img
                      className="tick"
                      src="Assets/tick.svg"
                      alt=""
                      width={"20px"}
                    />
                  </div>
                  <div className="text-start px-2">
                    <span>Creater</span>
                    <div>
                      <code>0x4584651613..</code>
                      <code>0x4584...43EF</code> &nbsp;
                      <img src="Assets/copy.svg" alt="" width={"25px"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card1 px-2 mt-3">
                  <div>
                    <img
                      className="img-fluid border"
                      src="Assets/c-img.png"
                      alt=""
                      width={"50px"}
                    />
                    <img
                      className="tick"
                      src="Assets/tick.svg"
                      alt=""
                      width={"20px"}
                    />
                  </div>
                  <div className="text-start px-2">
                    <span>Collection</span>
                    <div>
                      <b>Cronos World Tour</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8  mt-5 px-3">
                <h1>{state.name}</h1>
                <div className="row">
                  <div className="col ">
                    <p>STARTING BID</p>
                    <strong className="px-5">$21</strong>
                  </div>
                  <div className="col-md-1 mt-4">
                    <div className="vr"></div>
                  </div>
                  <div className="col">
                    <p>AUCTION ENDS IN</p>
                    <strong className="">0 d 1 h 54 m 24 s</strong>
                  </div>
                </div>
              </div>
              <div className="col-md-4  mt-5">
                <span className="badge text-bg-secondary">Marketplace</span>
              </div>
              <div className=" celebrate mt-4">
                <h6>
                  Celebrate Cronos World Tour ! This is a commemorative NFT.
                  Collectible created in September 2022 on Cronos mainnet during
                  the Messari Mainnet conference.
                </h6>

                <div className="d-flex">
                  <p>Art</p>
                  <p>Cross Chain</p>
                </div>
              </div>
              <div className="col-md-8 mt-4">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      Ownership
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      History
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      Offers
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                  >
                    <div className="card card1 px-2 mt-3">
                      <div>
                        <img
                          className="img-fluid dp"
                          src="Assets/default-profile.jpg"
                          alt=""
                          width={"50px"}
                        />
                      </div>
                      <div className="text-start px-2">
                        <span>Owner</span>
                        <div>
                          {" "}
                          <b>God of war</b>
                        </div>
                      </div>
                      <div className="code">
                        <code>cro100w8yz03qn4s8n...</code>
                        <img src="Assets/copy2.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
                    <div className="card card1 px-2 mt-3">
                      <div>
                        <img
                          className="img-fluid dp"
                          src="Assets/default-profile.jpg"
                          alt=""
                          width={"50px"}
                        />
                      </div>
                      <div className="text-start px-2">
                        <span>13 Hours</span>
                        <div>
                          {" "}
                          <b>Deposited to God of war</b>
                        </div>
                      </div>
                      <div className="code">
                        <span style={{ color: "blue" }}>View Details</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade text-center mt-3 "
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="0"
                  >
                    No history Avaliable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="card card2 px-3 py-3">
                <div className=" d-flex justify-content-between">
                    <div className="d-flex">
                    <img className="crd-img" src={state.img2} alt="" width={"60px"} /> &nbsp;&nbsp;&nbsp;
                    <h1>{state.name}</h1>
                    </div>
                    <div><button className="text-end b1"> Buy For $1000</button></div>
                    
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carddata;
