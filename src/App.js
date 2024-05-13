import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './Components/Booking';
import Home from "./Components/Home";
import NavBar from './Components/Navbar';
import ContactUs from "./Components/Contact";
import Rooms from "./Components/Rooms";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
