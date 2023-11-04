import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Home from './components/home/Home'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
