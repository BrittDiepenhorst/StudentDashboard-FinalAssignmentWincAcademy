import { useParams } from 'react-router-dom';
import { getReviewsByName, getStudentByName } from '../utils/filtersStudentData';

const Student = () => {
    const { studentName } = useParams();
    console.log(studentName);
    const student = getStudentByName(studentName);
    console.log(student)
    const reviews = getReviewsByName(studentName);

    return (
        <div>
            <h1>Student: {studentName} {student.lastName}</h1>
            <div className='studentdetails'>
                <h4>Student details</h4>
                <img src={student.photo} alt='profilephoto' width='50px'></img>
                <p>Age: {student.age} </p>
                <p>Phone number: {student.phonenumber}</p>
                <p>Email: {student.email} </p>
            </div>

            <pre>{JSON.stringify(student, null, 2)}</pre>
            <pre>{JSON.stringify(reviews, null, 2)}</pre>
            {/* <Barchart data={reviews} /> */}
        </div>
    );
};

export default Student;

// data van 1 student 
// studentName  gebruiken om de volledige dataset te filteren op die naam
// filter maken als er geklikt wordt op de filter 
