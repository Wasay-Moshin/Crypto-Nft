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
        <div className="row">
          <div className="col-md-4">
            <ProSidebarProvider>
              <Sidebar>
                <Menu>
                  <h3>Filter</h3>
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
              ;
            </ProSidebarProvider>
            ;
          </div>
          <div className="col-md-8">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidemenu;
