import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import NavbarStudents from './components/NavbarStudents';
import NavbarAssignments from './components/NavbarAssignments';
import Students from './pages/Students';
import Student from './pages/Student';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>

      <div className='container'>
        <Header />
        <NavbarStudents />
        <NavbarAssignments />
        <Routes>

          <Route path='students' element={<Students />} />
          <Route path='students/:studentName' element={<Student />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
