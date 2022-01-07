import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Menu from './pages/menu';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path='Eggcellent/' exact element={<Home/>}/>
        <Route path='Eggcellent/menu' element={<Menu/>}/>
        <Route path='Eggcellent/about' element={<About/>}/>
        <Route path='Eggcellent/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
