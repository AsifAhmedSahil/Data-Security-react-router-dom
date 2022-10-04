import Cloud from "./components/cloud/Cloud";
import Data from "./components/data/Data";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Data/>
      <Cloud/>
      <Footer/>
    </div>
  );
}

export default App;
