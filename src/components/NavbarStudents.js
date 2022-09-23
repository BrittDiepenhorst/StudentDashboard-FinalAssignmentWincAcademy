import studentProfilesData from '../utils/studentProfilesData.json'
// import { getStudentByNameArray } from '../utils/filtersStudentData';

const NavbarStudents = () => {
    const allStudents = studentProfilesData.studentProfiles.map(studentProfile => studentProfile.firstName);
    const students = [];
    allStudents.forEach(student => {
        if (!students.includes(student)) {
            students.push(student)
        }
        return students;
    })
    // console.log(getStudentByNameArray);
    // const students = getStudentByNameArray();
    // console.log(students);

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