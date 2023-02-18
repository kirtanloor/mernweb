import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Techrider from './components/Techrider';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {
  return (
    <div className="root">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path ="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/techrider" element={<Techrider />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
