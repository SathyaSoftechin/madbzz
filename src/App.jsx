import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Impact from "./screens/Impact";
import Services from "./screens/Services";
import Contact from "./screens/Contact";
function App() {
  return (
    <div className="app">
      
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
           <Route path="/impact" element={<Impact />} />
            <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;