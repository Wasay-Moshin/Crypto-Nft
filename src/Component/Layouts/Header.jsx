import React from "react";
// import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="Assets/logo.svg" alt=""></img>
          </a>
          <div>
            <div className=" search px-5 py-1">
              <img className="img-fluid"src="Assets/srch.svg" alt="" width={"20px"}/>&nbsp;
              <div>
              <input 
                  type="search"
                  placeholder="Search"
                  aria-label="Search"/>
            </div>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Drops
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brands
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Philadelphia 76ers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Aston Martin F1
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Lega Serie A
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      DRESSX
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
            <div>
               <button className="btn"> Create</button> 
            </div>
            <div class="vr" style={{color:"white"}}></div>
            <div>
                <b>Sign In</b>
            </div>
            <div class="vr" style={{color:"white"}}></div>
            <div>
                <b>Sign Up</b>
            </div>
            <div class="vr" style={{color:"white"}}></div>
            <div>
                   <span>English</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
