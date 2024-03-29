import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard'
import Students from './pages/Students';
import Student from './pages/Student';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (

    <div className='container'>
      <Header />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='students' element={<Students />} />
        <Route path='students/:studentName' element={<Student />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

    </div>

  );
}

export default App;
