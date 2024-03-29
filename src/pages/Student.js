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
    const student = getStudentByName(studentName);
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
        <div className='studentpage'>
            <div className='studentdetails'>
                <div className='studentdetails-img-title'>
                    <img src={student.photo} alt='profilephoto' width='50px'></img>
                    <h1>{studentName} {student.lastName} </h1>
                </div>
                <p> <b>Age:</b> {student.age} <b>Phone number:</b> {student.phonenumber} <b>Email:</b> {student.email}</p>
            </div>

            <Bar options={options} data={data} />

        </div>
    );
};

export default Student;

