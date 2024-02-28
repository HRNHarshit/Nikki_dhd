import "./App.css";
import Home1 from "./Components/Home1";
import Navbar from "./Components/Navbar";
import Home2 from "./Components/Home2";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home1 />
      <Home2 />
      <Footer />
    </div>
  );
}

export default App;
