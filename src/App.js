// In src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<Article />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
