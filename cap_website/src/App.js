import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
// import Footer from './components/Footer';
// import EstimateRequest from './components/EstimateRequest';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;