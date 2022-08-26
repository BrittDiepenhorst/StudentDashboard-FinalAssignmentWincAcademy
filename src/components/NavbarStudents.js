const NavbarStudents = () => {
    return (
        <nav className='app-navbar navbar-students'>
            <h3>Select or unselect a student</h3>
            <input type="checkbox" />
            <label>[NAAM1]</label>
            <br/>
            <button className='app-navbar-SelectAll'>Select all students</button>
        </nav>
    )
}

export default NavbarStudents;