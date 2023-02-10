import { useSelector } from 'react-redux';
import CalculateAverages from '../utils/filtersStudentData';
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


export default function Dashboard() {
    const state = useSelector((state) => state.assignments)
    const assignments = state.assignments
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Student Dashboard',
            },
        },
    };

    const averages = CalculateAverages();
    const averageDifficulty = averages.averageDifficulty;
    const averageFun = averages.averageFun;

    const labels = assignments.map(assigment => { return (assigment.name) })
    console.log(labels)

    const data = {
        labels,
        datasets: [
            {
                label: 'Fun',
                data: averageFun,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Difficult',
                data: averageDifficulty,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    };
    console.log(data)

    return <Bar options={options} data={data} labels={labels} />;
}
