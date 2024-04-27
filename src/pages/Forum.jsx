import React from 'react';
import Navbar from '../components/Navbar';
import './Forum.css';

const Forum = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Discussion Forum</h1>
      </header>

      <section id="comment-form">
        <h2>Leave a Comment</h2>
        <form>
          <div className="form-group">
            <label htmlFor="comment-author">Your Name:</label>
            <input type="text" id="comment-author" name="author" required />
          </div>
          <div className="form-group">
            <label htmlFor="comment-text">Your Comment:</label>
            <textarea id="comment-text" name="comment" rows="4" required></textarea>
          </div>
          <button type="submit">Post Comment</button>
        </form>
      </section>

      <section id="comments-list">
        <h2>Comments</h2>
        <div className="comment">
          <h3>Jane Doe</h3>
          <p>This is a sample comment. Great discussion!</p>
        </div>
        <div className="comment">
          <h3>John Smith</h3>
          <p>I found this topic very interesting. Thanks for sharing!</p>
        </div>
        {/* Additional comments can be appended here */}
      </section>
    </div>
  );
};

export default Forum;
