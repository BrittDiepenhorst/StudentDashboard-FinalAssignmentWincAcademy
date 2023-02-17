import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavbarStudents from './../components/NavbarStudents';
import NavbarAssignments from './../components/NavbarAssignments';
// import CaculateAverages from '../utils/filtersStudentData';
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

    // const averages = CaculateAverages();
    // const averageDifficulty = averages.averageDifficulty;
    // const averageFun = averages.averageFun;

    const state = useSelector((state) => state.assignments)
    const assignments = state?.assignments || [];
    const labels = assignments.map((assignment) => assignment.name);


    console.log(labels)

    // data (is now 1, 2, 3, 4, 5) -> should be averageDifficulty & averageFun for each assignment that is selected and this should match the student(s) selected
    // data (in the labels) should match the average data in the y-as

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

    return (
        <>
            <NavbarStudents />
            <NavbarAssignments />
            <Bar options={options} data={data} />
        </>
    )
}
