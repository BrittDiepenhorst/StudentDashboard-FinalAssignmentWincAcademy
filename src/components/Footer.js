import githubLogo from '../images/GHlogo.png'

const Footer = () => {
    return (
        <div className='app-footer'>
            <a target='_blank' rel='noreferrer' href='https://github.com/BrittDiepenhorst/Student-dashboard'><img src={githubLogo} alt='logo' width='50px'></img></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/BrittDiepenhorst/Student-dashboard'><p>Britt Diepenhorst</p></a>
        </div>
    )
}

export default Footer;