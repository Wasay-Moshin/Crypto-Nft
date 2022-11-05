import React from "react";
import { useNavigate} from "react-router-dom"
import data from "../Utils/crypto_data.json"
function Cards() {
  const navigate = useNavigate()
  return (
    <div className="cards">
      <div className="container">
        <div className="row mb-5">
          {data.map(i=>(<div className="col-md-4 py-3" onClick={()=>navigate("/carddata", {state:i})}>
            <div className="card">
              <img src={i.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src={i.avatar} alt="" />
                  <p className="card-text">{i.author}</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>{i.name}</span>
                <p>{i.status}</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>${i.price}</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>19 minutes</span>
                    </div>
                  </div>
                  <div className="col-sm-4 ">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>))}
          {/* <div className="col-md-4">
            <div className="card">
             <Link to="/content2"> <img src="Assets/c2.gif" className="card-img-top" alt="..." /></Link>
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src="Assets/c1-img.png" alt="" />
                  <p className="card-text">Cronos World Tour</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>Cronos World Tour at Messari....</span>
                <p>1 minted</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>$24</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>2 hours</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-md-4">
            <div className="card">
             <Link to="/content3"> <img src="Assets/c3.jpeg" className="card-img-top" alt="..." /></Link>
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src="Assets/c3-img.gif" alt="" />
                  <p className="card-text">Cronos World Tour</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>Cronos World Tour at Messari....</span>
                <p>1 minted</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>$12</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>19 minutes</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="row mb-5">
          <div className="col-md-4">
            <div className="card">
              <img src="Assets/c4.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src="Assets/c1-img.png" alt="" />
                  <p className="card-text">Cronos World Tour</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>Cronos World Tour at Messari....</span>
                <p>1 minted</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>$12</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>19 minutes</span>
                    </div>
                  </div>
                  <div className="col-sm-4 ">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="Assets/c5.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src="Assets/c1-img.png" alt="" />
                  <p className="card-text">Cronos World Tour</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>Cronos World Tour at Messari....</span>
                <p>1 minted</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>$24</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>2 hours</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="Assets/c6.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src="Assets/c1-img.png" alt="" />
                  <p className="card-text">Cronos World Tour</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>Cronos World Tour at Messari....</span>
                <p>1 minted</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>$12</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>19 minutes</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="row mb-5">
          <div className="col-md-4">
            <div className="card">
              <img src="Assets/c1.gif" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src="Assets/c1-img.png" alt="" />
                  <p className="card-text">Cronos World Tour</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>Cronos World Tour at Messari....</span>
                <p>1 minted</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>$12</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>19 minutes</span>
                    </div>
                  </div>
                  <div className="col-sm-4 ">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="Assets/c8.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src="Assets/c1-img.png" alt="" />
                  <p className="card-text">Cronos World Tour</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>Cronos World Tour at Messari....</span>
                <p>1 minted</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>$24</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>2 hours</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="Assets/c9.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="cb">
                  <img className="c1-img" src="Assets/c3-img.gif" alt="" />
                  <p className="card-text">Cronos World Tour</p>
                  <img src="Assets/tick.svg" alt="" />
                </div>
                <span>Cronos World Tour at Messari....</span>
                <p>1 minted</p>
                <div className="row text-center">
                  <div className="col-sm-8">
                    <div className="t1">
                      <p>Current bid</p>
                      <span>$12</span>
                    </div>
                    <div className="t1">
                      <p>Ends In</p>
                      <span>19 minutes</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <button className="btn1">Bid</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Cards;
