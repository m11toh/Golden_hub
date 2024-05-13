import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      backgroundImage: 'url("https://www.prideinn.co.ke/wp-content/webp-express/webp-images/uploads/elementor/thumbs/brand-plaza-scaled-q9cetsplcxnkm8juuhz3rsxh81tkloqbak693q84lc.jpg.webp")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{color:'goldenrod'}}>Welcome to Golden Horizon Hotel</h1>
        <p style={{ color: 'goldenrod', fontSize: '20px' }}>Thank you! for choosing us.</p>
        <p style={{ color: 'goldenrod', fontSize: '20px' }}>Press Rooms to proceed</p>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/" style={buttonStyle}>Home</Link>
          </li>
          <li>
            <Link to="/rooms" style={{ ...buttonStyle, marginLeft: '370px' }}>Rooms</Link>
          </li>
        </ul>
      </div>
      <Link to="/contact" style={{ ...buttonStyle, marginTop: '70px' }}>Contact Us</Link>
    </nav>
  );
};

const buttonStyle = {
  textDecoration: 'none',
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Navbar
