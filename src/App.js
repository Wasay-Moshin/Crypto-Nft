import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Cards from "./Component/Elements/Cards";
import Content1 from "./Component/Elements/Content1";
import Content2 from "./Component/Elements/Content2";
import Content3 from "./Component/Elements/Content3";
import Base from "./Component/Layouts/Base";
function App() {
  return (
    <div>
  <>
        <BrowserRouter>
          <Base>
            <Routes>
              <Route index path="/" element={<Home/>} />
              <Route path="/content1" element={<Content1/>} />
              <Route path="/content2" element={<Content2/>} />
              <Route path="/content3" element={<Content3/>} />
            </Routes>
          </Base>
        </BrowserRouter>
      </>
 
    </div>
  );
}

export default App;
