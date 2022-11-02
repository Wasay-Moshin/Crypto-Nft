import React from "react";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
function Sidemenu() {
  return (
    <div className="sidemenu">
      <div className="container-fluid mt-5 ">
        <ProSidebarProvider>
          <Sidebar>
            <Menu>
              <h3>Filter</h3>
              <SubMenu label="Listing Type">
                <MenuItem  ><input type="checkbox" /> Buy Now </MenuItem>
                <MenuItem> <input type="checkbox" />Auction </MenuItem>
              </SubMenu>
              <SubMenu label="Curation">
                <MenuItem><input type="checkbox" /> Curated</MenuItem>
                <MenuItem><input type="checkbox" /> Non-Curated</MenuItem>
              </SubMenu>
              <SubMenu label="Price">
                <MenuItem className="d-flex">
                  {" "}
                  <div>
                    <input type="text" placeholder="Minimun" />
                  </div>
                </MenuItem>
              </SubMenu>
              <SubMenu label="Collections">
                <MenuItem> Curated</MenuItem>
                <MenuItem> Non-Curated</MenuItem>
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
    </div>
  );
}

export default Sidemenu;
