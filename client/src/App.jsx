import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
