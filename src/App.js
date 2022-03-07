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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/papers" element={<Papers />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
