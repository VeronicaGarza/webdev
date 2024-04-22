import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes instead of BrowserRouter and Router
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <main>
        <Routes>
          <Route path="/webdev" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
