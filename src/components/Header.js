import logo from '../images/WincAcademy-logo.png'
import { Link } from 'react-router-dom';


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


            </div>

        </div>
    )
}

export default Header;