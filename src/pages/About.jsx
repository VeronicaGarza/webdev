import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
        />
      </head>
      <body>
        <Navbar />
        <main className="about">
          <section className="text-content">
            <section className="title">
              <h1>Welcome to Out and About</h1>
            </section>
            <section className="description">
              <h4>
                Join us on a journey through transformation and exploration. Let's learn
                and grow together, pushing boundaries and embracing change
              </h4>
              <br /><br />
              <p>
                At Out and About, we provide students in Boston with the resources
                and guidance they need to navigate personal budgeting effectively,
                empowering them to share knowledge and thrive within our vibrant
                student community. Through our informative content and tools, we aim
                to support students in their financial journey towards achieving
                personal and academic success.<br /><br />Embrace sustainability in
                all aspects of life. Small actions can make a big impact. Together,
                we can create a better world for future generations.
               </p>
            </section>
          </section>
          <section className="photo">
            <img
              src="https://cdn.glitch.global/61ed9e23-9b4a-4a20-83b1-e45aff56fc8f/LFP.png?v=1713740153037"
              alt="boxes"
              className="boxes"
            />
          </section>
        </main>
      </body>
    </html>
  );
};

export default About;