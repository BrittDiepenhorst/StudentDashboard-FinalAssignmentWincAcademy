import { useSelector } from 'react-redux';
import CaculateAverage from '../utils/filtersStudentData'
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

    const labels = assignments.map(assigment => { return (assigment.name) })
    console.log(labels)

    CaculateAverage()

    const data = {
        labels,
        datasets: [
            {
                label: 'Fun',
                data: [],

                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Difficult',
                data: [],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
            // {
            //   label: 'Dataset 1',
            //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
            // },
            // {
            //   label: 'Dataset 2',
            //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
            // },
        ],
    };
    console.log(data)

    return <Bar options={options} data={data} labels={labels} />;
}
