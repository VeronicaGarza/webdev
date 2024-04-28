import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Services.css';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="grid-container">
        <Link to="/student" className="rectangle">
          {/* Default image for larger screens */}
          <img
            src="https://cdn.glitch.global/61ed9e23-9b4a-4a20-83b1-e45aff56fc8f/STUDENT%20RESOURCES%20(1000%20x%20300%20px).png?v=1714074511888"
            alt="student"
            className="student larger"
          />
          {/* Alternative image for smaller screens */}
          <img
            src="https://cdn.glitch.global/fe54d062-9300-4c2b-86d6-bf340877279e/STUDENT%20RESOURCES.png?v=1714272029609"
            alt="student"
            className="student smaller"
          />
        </Link>
        <Link to="/social" className="square">
          <img
            src="https://cdn.glitch.global/61ed9e23-9b4a-4a20-83b1-e45aff56fc8f/SOCIAL.png?v=1714001828660"
            alt="social"
          />
        </Link>
        <Link to="/forum" className="square">
          <img
            src="https://cdn.glitch.global/61ed9e23-9b4a-4a20-83b1-e45aff56fc8f/SOCIAL%20copy.png?v=1714001828161"
            alt="forum"
          />
        </Link>
        <Link to="/essentials" className="square">
          <img
            src="https://cdn.glitch.global/61ed9e23-9b4a-4a20-83b1-e45aff56fc8f/SOCIAL%20copy%202.png?v=1714001827757"
            alt="essentials"
          />
        </Link>
      </div>
    </div>
  );
}

export default Services;
