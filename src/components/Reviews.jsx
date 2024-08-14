import React, { useState } from 'react';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ rating, review, name, email, rememberMe });
  };

  return (
    <div style={{ marginTop: '20px' }} className='text-black'>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>REVIEWS</h2>
      <p>There are no reviews yet.</p>
      <p>Be the first to review "Basketball"</p>
      <p>Your email address will not be published. Required fields are marked *</p>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Your rating *</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  cursor: 'pointer',
                  fontSize: '24px',
                  color: star <= rating ? '#ff4c3b' : '#ccc',
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Your review *</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f8f8f8',
              minHeight: '150px',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f8f8f8',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f8f8f8',
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              style={{ marginRight: '10px' }}
            />
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#ff4c3b',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
