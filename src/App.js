import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import Header from "./Component/Layouts/Header";
import Hero from "./Component/Elements/Hero";
import Sidemenu from "./Component/Layouts/Sidemenu";
function App() {
  return (
    <div>
   <Header/>
   <Hero/>
   <Sidemenu/>
    </div>
  );
}

export default App;
