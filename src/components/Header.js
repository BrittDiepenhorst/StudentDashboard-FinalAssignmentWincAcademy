import logo from '../images/WincAcademy-logo.png'

const Header = () => {
    return (
        <div className='app-header'>

            <div className='header-img'>
                <img src={logo} alt="logo" width='200px'></img>
            </div>

            <span className='header-title'>
                <h1>Student dashboard</h1>
            </span>

        </div>
    )
}

export default Header;