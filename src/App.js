import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './Components/About';
import Footer from './Components/Footer';
import Papers from './Components/Papers';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Tutoring from './Components/Tutoring';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Tutoring />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/about" element={<About />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
