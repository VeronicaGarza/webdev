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
        <h3>Leave a Comment</h3>
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
        <h3>Comments</h3>
        <div className="comment">
          <h4>Jane Doe</h4>
          <p>This is a sample comment. Great discussion!</p>
        </div>
        <div className="comment">
          <h4>John Smith</h4>
          <p>I found this topic very interesting. Thanks for sharing!</p>
        </div>
        {/* Additional comments can be appended here */}
      </section>
    </div>
  );
};

export default Forum;
