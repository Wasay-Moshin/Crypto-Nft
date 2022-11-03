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
//     <div className="sidebar">
//       <div class="accordion" id="accordionPanelsStayOpenExample">
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="panelsStayOpen-headingOne">
//       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
//       <div class="accordion-body">
//         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
//       <div class="accordion-body">
//         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="panelsStayOpen-headingThree">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
//       <div class="accordion-body">
//         <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
  );
}

export default Sidemenu;
