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
        </div>

    )
}

export default Students;