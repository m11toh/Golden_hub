import React, { useState } from 'react';

const Booking = () => {
  // State for form fields
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // State for active step
  const [activeStep, setActiveStep] = useState(1);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Depending on activeStep, handle different actions
    switch (activeStep) {
      case 1:
        // Basic validation for step 1
        if (checkInDate && checkOutDate) {
          // Proceed to step 2 if all required fields are filled
          setActiveStep(2);
        } else {
          // Handle validation errors or display a message to the user
          alert("Please fill in all required fields for room/rate check.");
        }
        break;
      case 2:
        // Basic validation for step 2
        if (name && email && phone && cardNumber && expiryDate && cvv) {
          // Proceed to step 3 if all required fields are filled
          setActiveStep(3);
        } else {
          // Handle validation errors or display a message to the user
          alert("Please fill in all required fields for checkout.");
        }
        break;
      case 3:
        // No validation needed for step 3, as it's confirmation
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <style>
        {`
          body {
            background-image: url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center;
            height: 100vh;
            margin: 0;
            padding: 0;
          }
          .form-container {
            margin-top: 300px; /* Adjust as needed */
          }
        `}
      </style>
      <div className="container-fluid d-flex justify-content-center align-items-center form-container">
        <div className="row justify-content-center">
          <div className="col-md-20">
            <div className="card border border-warning rounded">
              <div className="card-header bg-warning">
                <ul className="nav nav-tabs card-header-tabs justify-content-center">
                  <li className="nav-item">
                    <button className={`nav-link ${activeStep === 1 ? 'active' : ''}`} onClick={() => setActiveStep(1)}>1. Checkin</button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${activeStep === 2 ? 'active' : ''}`} onClick={() => setActiveStep(2)}>2. Checkout</button>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${activeStep === 3 ? 'active' : ''}`} onClick={() => setActiveStep(3)}>3. Confirmation</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Book Your Stay</h2>
                <form onSubmit={handleSubmit} className="row justify-content-center">
                  {/* Step 1: Check Room/Rate */}
                  {activeStep === 1 && (
                    <>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="checkInDate" className="form-label">Check-in Date:</label>
                        <input type="date" className="form-control" id="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="checkOutDate" className="form-label">Check-out Date:</label>
                        <input type="date" className="form-control" id="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
                      </div>
                    </>
                  )}
                  {/* Step 2: Checkout */}
                  {activeStep === 2 && (
                    <>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="email" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="phone" className="form-label">Phone number:</label>
                        <input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="cardNumber" className="form-label">Credit Card Number:</label>
                        <input type="text" className="form-control" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="expiryDate" className="form-label">Expiry Date:</label>
                        <input type="text" className="form-control" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label htmlFor="cvv" className="form-label">CVV:</label>
                        <input type="text" className="form-control" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                      </div>
                    </>
                  )}
                  {/* Step 3: Confirmation */}
                  {activeStep === 3 && (
                    <div>
                      <p>Your booking has been received and will contact you shortly!</p>
                    </div>
                  )}
                  {/* Next/Submit Button */}
                  {activeStep !== 3 && (
                    <div className="mb-3 text-center">
                      <button type="submit" className="btn btn-primary">{
                        activeStep === 2 ? 'Proceed to Confirmation' : 'Proceed to Checkout'
                      }</button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;