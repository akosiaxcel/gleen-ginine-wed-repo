import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EventDetails from "./components/EventDetails";

import NavBar from "./components/NavBar";
import WeddingGallery from "./components/WeddingGallery";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/gallery" element={<WeddingGallery />} />
      </Routes>
    </Router>
  );
}


export default App;