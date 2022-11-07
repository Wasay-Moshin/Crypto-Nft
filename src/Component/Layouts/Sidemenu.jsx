import React from "react";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import Cards from "../Elements/Cards";
import { FaSearch } from "react-icons/fa";
function Sidemenu() {
  return (
    <div className="sidemenu">
      <div className="container-fluid mt-5 ">
        <div className=" sticky">
          <h4>Explore</h4>
        </div>
        <div className="row ">
          <div className="col-md-3">
            <ProSidebarProvider>
              <Sidebar className="sticky1">
                <Menu>
                  <div
                    className="d-flex justify-content-between "
                    style={{ marginRight: "5px" }}
                  >
                    <h4>Filter</h4>
                    <img className="menu-img" src="Assets/menu.svg" alt="" />
                  </div>
                  <SubMenu label="Listing Type">
                    <MenuItem>
                      <input type="checkbox" /> Buy Now{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" />
                      Auction{" "}
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Curation">
                    <MenuItem>
                      <input type="checkbox" /> Curated
                    </MenuItem>
                    <MenuItem>
                      <input type="checkbox" /> Non-Curated
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Price">
                    <MenuItem className="d-flex">
                      {" "}
                      <div>
                        ${" "}
                        <input
                          className="input1 px-2 py-2"
                          type="text"
                          placeholder="Minimum"
                        />
                        -
                        <input
                          className="input1 px-2 py-2"
                          type="text"
                          placeholder="Maximum"
                        />
                      </div>
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Collections">
                    <MenuItem>
                      <div className=" search px-4 py-2">
                        <FaSearch size={"20px"} color={"black"} />
                        &nbsp;
                        <div>
                          <input
                            className="input1"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <div className="img1">
                        <input type="checkbox" />
                        <img className="img-fluid" src="Assets/h1.png" alt="" />
                        <p>Art Blocks</p>
                      </div>
                      <img className="tick" src="Assets/tick.svg" alt="" />
                    </MenuItem>
                    <MenuItem>
                      <div className="img1">
                        <input type="checkbox" />
                        <img className="img-fluid" src="Assets/h2.png" alt="" />
                        <p>Mutant Ape Yacht Club</p>
                      </div>
                      <img className="tick" src="Assets/tick.svg" alt="" />
                    </MenuItem>
                    <MenuItem>
                      <div className="img1">
                        <input type="checkbox" />
                        <img className="img-fluid" src="Assets/h3.png" alt="" />
                        <p>Meebits</p>
                      </div>
                      <img className="tick" src="Assets/tick.svg" alt="" />
                    </MenuItem>
                    <MenuItem>
                      <div className="img1">
                        <input type="checkbox" />
                        <img
                          className="img-fluid"
                          src="Assets/h6.jpeg"
                          alt=""
                        />
                        <p>Otherdeed for Otherside</p>
                      </div>
                      <img className="tick" src="Assets/tick.svg" alt="" />
                    </MenuItem>
                    <MenuItem>
                      <div className="img1">
                        <input type="checkbox" />
                        <img
                          className="img-fluid"
                          src="Assets/original.webp"
                          alt=""
                        />
                        <p>RENGA</p>
                      </div>
                      <img className="tick" src="Assets/tick.svg" alt="" />
                    </MenuItem>
                    <MenuItem>
                      <div className="img1">
                        <input type="checkbox" />
                        <img className="img-fluid" src="Assets/h7.png" alt="" />
                        <p>PROOF Collective</p>
                      </div>
                      <img className="tick" src="Assets/tick.svg" alt="" />
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Chain">
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Crypto.org Chain{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Cronos{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Ethereum{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Polygon{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Solona{" "}
                    </MenuItem>
                  </SubMenu>
                  <SubMenu label="Categories">
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Art{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Celebrities{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Gaming{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> sport{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Music{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <input type="checkbox" /> Crypto{" "}
                    </MenuItem>
                  </SubMenu>
                </Menu>
              </Sidebar>
            </ProSidebarProvider>
          </div>
          <div className="col-md-9 sticky">
            <div className="row sticky">
            <div className="d-flex justify-content-end ">
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="Assets/sort.svg" alt="" width={"20px"} />
                  &nbsp; Sort By
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      <b>Most Relevant</b>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <b>Recently Listed</b>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <b> Newest</b>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <b> Price: Low to High</b>
                    </a>
                  </li>{" "}
                  <li>
                    <a className="dropdown-item" href="/">
                      <b> Price: High to Low</b>
                    </a>
                  </li>{" "}
                  <li>
                    <a className="dropdown-item" href="/">
                      <b>Auction Ending Soon</b>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <b>Most Like</b>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  <img src="Assets/fourbox.svg" alt="" width={"23px"} />
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                <img src="Assets/boxes.svg" alt="" width={"25px"}  />
                </label>
              </div>
            </div>
            </div>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
