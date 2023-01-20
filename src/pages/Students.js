import { Link } from 'react-router-dom';
import { getAllStudents } from '../utils/filtersStudentData';

const Students = () => {
    const availableStudents = getAllStudents().studentProfiles;
    console.log(availableStudents)
    const renderedStudents = availableStudents.map((student) => {

        return (
            <ul>
                <Link to={'/students/' + student.firstName}><li className='avatars' key={student.firstName}> <img src={student.photo} alt='profilephoto' width='50px'></img> {student.firstName} {student.lastName}</li></Link>
            </ul>)

    })
    return (

        <div>
            <h1>Students</h1>
            {renderedStudents}
            {/* <Link to='/students/:studentName'> </Link> */}
        </div>

    )
}

export default Students;

// const StudentFilters = ({ value: students, onChange }) => {
//     const renderedStudents = availableStudents.map((student) => {
//         const checked = students ? students.includes(student) : true;
//         const handleChange = () => {
//             const changeType = checked ? 'removed' : 'added'
//             onChange(student, changeType)
//         }

//         return (
//             <label key={student.firstName}>
//                 <input
//                     type="checkbox"
//                     name={student.firstName}
//                     checked={checked}
//                     onChange={handleChange}
//                     className="checkboxdetails"
//                 />{student.firstName} {student.lastName}
//             </label>
//         )
//     })