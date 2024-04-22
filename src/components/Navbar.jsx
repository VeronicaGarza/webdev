import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-options">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar