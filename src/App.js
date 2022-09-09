import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavbarStudents from './components/NavbarStudents';
import NavbarAssignments from './components/NavbarAssignments';
import Barchart from './components/Barchart';
import Footer from './components/Footer';
import studentData from './utils/mockdata_Winc.json';
import Students from './pages/Students';
import Student from './pages/Student';

function App() {
  return (
    <BrowserRouter>

      <div className='container'>
        <Header />
        <NavbarStudents data={studentData} />
        <NavbarAssignments />
        <Barchart />
        <Footer data={studentData} />

      </div>
      <Routes>

        <Route path='students' element={<Students />} />
        <Route path='students/:studentId' element={<Student />} />

        {/* <Route path='/Students/Student/:name'
          render={(props) => <StudentPage {...props} studentData={studentData} />}
        />

        <Route path='/Students/'>
          <StudentPage students={students} />
        </Route> */}

        {/* <Route path='/'>
          <Dashboard />
        </Route> */}

      </Routes>

    </BrowserRouter>
  );
}

export default App;
