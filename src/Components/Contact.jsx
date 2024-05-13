import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary submission logic here
    // For demonstration purposes, just set submitted to true
    setSubmitted(true);
  };

  return (
    <div style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h2>Contact Us</h2>
        {!submitted ? (
          <>
            <p>Please feel free to reach out to us with any questions or inquiries.</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Your Email" style={inputStyle} />
              <textarea placeholder="Your Message" style={{ ...inputStyle, height: '100px' }}></textarea>
              <button type="submit" style={buttonStyle}>Submit</button>
            </form>
          </>
        ) : (
          <p>Your message has been submitted. We'll get back to you soon!</p>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#f5f5f5',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Contact;
