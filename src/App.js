import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import NavbarStudents from './components/NavbarStudents';
import NavbarAssignments from './components/NavbarAssignments';
import Barchart from './components/Barchart';
import Footer from './components/Footer';


function App() {
  return (

    <div className='container'>
      <Header />
      <NavbarStudents />
      <NavbarAssignments />

      <Barchart />

      <Footer />

    </div>

  );
}

export default App;
