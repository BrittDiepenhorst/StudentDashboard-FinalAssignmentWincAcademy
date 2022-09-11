import studentDataProfiles from '../utils/MOCK_DATA.json'

const NavbarStudents = ({ data }) => {
    const allStudents = studentDataProfiles.studentProfiles.map(studentProfile => studentProfile.firstName);
    console.log(allStudents);

    const students = [];
    allStudents.forEach(student => {
        if (!students.includes(student)) {
            students.push(student)
        }
        return students;
    })

    return (
        <nav className='app-navbar navbar-students'>
            <h3>Select or unselect a student</h3>
            <div className='AllStudents'><button className='app-navbar-SelectAll'>Select all students</button></div>
            {students.map(student => (
                <div className='studentCheckbox'>
                    <input type="checkbox" />
                    <label className='studentheckboxLabels'>{student}</label>
                </div>
            ))}

        </nav>
    )
}

export default NavbarStudents;