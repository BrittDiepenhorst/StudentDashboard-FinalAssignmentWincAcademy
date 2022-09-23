import { getAllStudents } from '../utils/filtersStudentData';
import { useNavigate } from 'react-router-dom'

const NavbarStudents = () => {
    const students = getAllStudents();
    console.log(students)
    const navigate = useNavigate();

    const handlesStudentCheckbox = (e) => {
        if (e.target.checked == true) {
            console.log('check', e.target, e.target.value)
            navigate('students/' + e.target.value)
        }
    }

    return (
        <nav className='app-navbar navbar-students'>
            <h3>Select or unselect a student</h3>
            <div className='AllStudents'><button className='app-navbar-SelectAll'>Select all students</button></div>
            {students.studentProfiles.map(student => (
                <div className='studentCheckbox'>
                    <input type="checkbox" value={student.firstName} id={student.id} onClick={handlesStudentCheckbox} />
                    <label className='studentheckboxLabels'>{student.firstName} {student.lastName}</label>
                </div>
            ))}

        </nav>
    )
}

export default NavbarStudents;