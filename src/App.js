import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Home from './components/home/Home'
import About from './components/about/About';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/menu' Component={Menu}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
