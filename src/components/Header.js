import logo from '../images/WincAcademy-logo.png'
import { Routes, Route, Link } from 'react-router-dom';
import Students from '../pages/Students';
import Student from '../pages/Student';
import Barchart from './Barchart';

const Header = () => {
    return (
        <div className='app-header'>

            <div className='header-img'>
                <Link to='/'><img src={logo} alt="logo" width='200px'></img></Link>
            </div>

            <div className='header-title'>
                <div>
                    <Link to='/'> <h4>Dashboard</h4> </Link>
                </div>

                <div>
                    <Link to='/students'> <h4>Students</h4> </Link>
                </div>

                <Routes>
                    <Route path='students' element={<Students />} />
                    <Route path='students/:studentName' element={<Student />} />
                </Routes>
            </div>

        </div>
    )
}

export default Header;