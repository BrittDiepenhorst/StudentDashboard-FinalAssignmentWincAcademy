const NavbarStudents = ({ data }) => {
    return (
        <nav className='app-navbar navbar-students'>
            <h3>Select or unselect a student</h3>

            {/* {data.reviews.map(dat => <input type="checkbox" /> && <label key={dat.name}>{dat.name}</label>)} */}
            <label>[NAAM1]</label>
            <br />
            <button className='app-navbar-SelectAll'>Select all students</button>
        </nav>
    )
}

export default NavbarStudents;