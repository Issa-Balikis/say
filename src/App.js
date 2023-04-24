import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Porfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <div className="app">
            <Router>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="/about" element={<About />} />
                <Route  path="/portfolio" element={<Porfolio />} />
                <Route  path="/contact" element={<Contact />} />
              </Routes>
            </Router>
        </div>
    );
}

export default App;