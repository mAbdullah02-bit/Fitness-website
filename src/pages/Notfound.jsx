import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Import custom CSS

function NotFound() {
  return (
    <div className="not-found-page bg-[url('https://images.pexels.com/photos/26455239/pexels-photo-26455239/free-photo-of-dolphin-swimming-in-blue-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-no-repeat bg-cover">
      <div className="content-wrapper">
        <div className="error-text">
          <h1>404</h1>
          <h2>How Did You Get Here?</h2>
          <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
          <div className="search-wrapper">
            <input type="text" placeholder="Search..." />
            <button type="submit">🔍</button>
          </div>
          <Link to="/" className="back-home-btn">
            Back to Home
          </Link>
        </div>
        <div className="cat-image-wrapper">
      
        </div>
      </div>
    </div>
  );
}

export default NotFound;
