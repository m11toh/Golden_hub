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
        <Route path="Golden_hub" element={<Home />} />
        <Route path="/Golden_hub/navbar" element={<NavBar />} />
        <Route path="/Golden_hub/rooms" element={<Rooms />} />
        <Route path="/Golden_hub/booking" element={<Booking />} />
        <Route path="/Golden_hub/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
