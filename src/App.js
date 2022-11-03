import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Cards from "./Component/Elements/Cards";
import Content1 from "./Component/Elements/Content1";
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
            </Routes>
          </Base>
        </BrowserRouter>
      </>
 
    </div>
  );
}

export default App;
