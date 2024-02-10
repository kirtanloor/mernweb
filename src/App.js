import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NextGigs from './components/NextGigs'
import About from './components/About';
import Samples from './components/Samples';
import Contact from './components/Contact';
import Techrider from './components/Techrider';
import Footer from './components/Footer';
//import SpotifyAuth from './components/spotifyAuth'; 
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
          <Route exact path ="/nextgigs" element={<NextGigs />} />
          <Route exact path ="/about" element={<About />} />
          <Route exact path="/samples" element={<Samples />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/techrider" element={<Techrider />} />
          {/*<Route exact path="/spotifyauth" element={<SpotifyAuth />} />*/}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
