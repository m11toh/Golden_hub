import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();



  const handleGetStartedClick = () => {
    navigate('/Golden_hub/navbar');
  };

  return (
    <div className="home-page">
      <header className="header-bg" style={{
        position: 'relative',
        backgroundImage: "url('https://www.prideinn.co.ke/wp-content/uploads/2024/04/PrideInn_Flamingo_Home.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center'
      }}>
        <div className="header-content" style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '20px'
        }}>
          <h1 className="hotel-title" style={{
            fontSize: '60px',
            color: '#da9413'
          }}>Golden Horizon Hotel</h1>
          <p className="luxury-text" style={{
            fontSize: '30px',
            color: '#e7d90f'
          }}>Experience luxury at its best</p>
          <button className="get-started-button" style={{
            fontSize: '20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '12px 24px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }} onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </header>
      <main>
        <section className="about" style={{ backgroundColor: '#ffd700', padding: '20px' }}>
          <h2>About Us</h2>
          <p>Welcome to Golden Horizon Hotel, where luxury meets comfort. We offer the finest accommodations and impeccable service to ensure your stay is memorable.</p>
        </section>
      </main>
      <footer style={{ backgroundColor: '#ffd700', padding: '20px' }}>
        <p>&copy; 2024 Golden Horizon Hotel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;