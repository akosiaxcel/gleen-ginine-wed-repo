import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EventDetails from "./components/EventDetails";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Home/>
    </Router>
  );
}


export default App;