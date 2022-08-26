const NavbarAssignments = () => {
    return (
        <nav className='app-navbar navbar-assignment'>
            <h3>Select or unselect an assignment</h3>
            <input type="checkbox" />
            <label>[Assign1]</label>
            <button className='app-navbar-SelectAll'>Select all assignments</button>
        </nav>
    )
}

export default NavbarAssignments;