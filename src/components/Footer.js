// import githubLogo from '../images/WincAcademy-logo.png'
import githubLogo from '../images/GitHub-Logo.png'

const Footer = () => {
    return (
        <div className='app-footer'>
            <a href='https://github.com/BrittDiepenhorst/Student-dashboard'><img src={githubLogo} alt="logo" width='100px'></img></a>
            <p>Britt Diepenhorst</p>
        </div>
    )
}

export default Footer;