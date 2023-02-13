import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getReviewsByName, getStudentByName } from '../utils/filtersStudentData';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Student = () => {
    const { studentName } = useParams();
    console.log(studentName);
    const student = getStudentByName(studentName);
    console.log(student)
    const reviews = getReviewsByName(studentName);


    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Student Dashboard',
        },
        legend: {
            position: 'top',
        },
    };

    const labels = reviews.map(review => review.assignment);
    const funData = reviews.map(review => review.fun);
    const difficultyData = reviews.map(review => review.difficulty);

    const data = {
        labels,
        datasets: [
            {
                label: 'Fun',
                data: funData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Difficult',
                data: difficultyData,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    };

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

            <Bar options={options} data={data} />

        </div>
    );
};

export default Student;

