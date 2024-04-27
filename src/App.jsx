import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes instead of BrowserRouter and Router
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Student from './pages/Student';
import Social from './pages/Social';
import Forum from './pages/Forum';
import Essentials from './pages/Essentials';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/student" element={<Student />} />
          <Route path="/social" element={<Social />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/essentials" element={<Essentials />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
