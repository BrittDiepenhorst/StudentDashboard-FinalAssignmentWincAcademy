import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import NavbarStudents from './components/NavbarStudents';
import NavbarAssignments from './components/NavbarAssignments';
import Dashboard from './pages/Dashboard'
import Students from './pages/Students';
import Student from './pages/Student';
import Footer from './components/Footer';

function App() {
  return (

    <div className='container'>
      <Header />
      <NavbarStudents />
      <NavbarAssignments />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='students' element={<Students />} />
        <Route path='students/:studentName' element={<Student />} />
      </Routes>

      <Footer />

    </div>

  );
}

export default App;
