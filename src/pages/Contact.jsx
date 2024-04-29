
import React from 'react';
import Navbar from '../components/Navbar';
import './Contact.css'; // Import CSS file

const Contact = () => {
  return (
    <div>
      <Navbar />

      <section className="container">
        <div className="contactInfo">
          <div className="contactLeft">
            <h3>Contact Us</h3>
            <div className="contactP">
              <p>
                Get in touch with our student-led team to learn more about our
                exciting educational projects in Boston. We can't wait to hear
                from you and share our passion for academia and innovation.
              </p>
            </div>
            <div className="contactIcons">
              <div className="contactPhone">
                <i className="fas fa-phone"></i>
                &nbsp;Phone: 617-552-3975
              </div>
              <div className="contactEmail">
                <i className="fas fa-envelope"></i>
                &nbsp;Email: yunmd@bc.edu
              </div>
              <div className="contactAddress">
                <i className="fas fa-map-marker-alt"></i>
                &nbsp;140 Commonwealth Ave<br />
                &nbsp;Chestnut Hill, MA 02467
              </div>
              <div className="contactSocials">
                <i className="fab fa-linkedin"></i>
                <a
                  href="https://www.linkedin.com/school/boston-college/mycompany/verification/"
                  alt="LinkedIn"
                >
                  &nbsp;LinkedIn
                </a>
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/bostoncollege/" alt="Instagram">
                  &nbsp;Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="formData">
          <h2>Email Form</h2>
          <p>
            Feel free to email us with any questions, suggestions, or feedback!
          </p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
            <input type="submit" value="Send Email" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
