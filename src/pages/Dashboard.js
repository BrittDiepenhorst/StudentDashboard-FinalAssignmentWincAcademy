import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CaculateAverages from '../utils/filtersStudentData';
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

    const averages = CaculateAverages();
    const averageDifficulty = averages.averageDifficulty;
    const averageFun = averages.averageFun;

    const [averageDifficultyState, setAverageDifficulty] = useState(averageDifficulty);
    const [averageFunState, setAverageFun] = useState(averageFun);

    console.log(averageFunState)

    useEffect(() => {
        // const averages = CaculateAverages();
        setAverageDifficulty(averages.averageDifficulty);
        setAverageFun(averages.averageFun);
    }, []);

    const state = useSelector((state) => state.assignments)
    const assignments = state.assignments
    const labels = assignments.map(assigment => { return (assigment.name) })

    // data (now 1, 2, 3, 4, 5) -> averageDifficultyState & averageFunState
    // data should match the assignment 

    const data = {
        labels,
        datasets: [
            {
                label: 'Fun',
                data: [1, 2, 3, 4, 5],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Difficult',
                data: [1, 2, 3, 4, 5],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    };

    return <Bar options={options} data={data} />;
}
