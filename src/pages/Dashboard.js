import React from 'react';
import { useSelector } from 'react-redux';
import NavbarStudents from './../components/NavbarStudents';
import NavbarAssignments from './../components/NavbarAssignments';
import calculateAverage from './../utils/filtersStudentData';
import studentReviewsData from './../utils/reviewsWincAcademy.json';

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

    const reviews = studentReviewsData.reviews;
    const selectedStudents = useSelector((state) => state.students.students);
    const selectedAssignments = useSelector((state) => state.assignments.assignments);
    const averages = calculateAverage(reviews, selectedStudents, selectedAssignments);
    console.log('averages: ', averages)

    const state = useSelector((state) => state.assignments)
    const assignments = state?.assignments || [];
    const labels = assignments.map((assignment) => assignment.name);

    // Create arrays of the average fun and difficulty for each selected assignment
    const assignmentNames = selectedAssignments.map(a => a.name);
    const averageFunData = assignmentNames.map(name => {
        const average = averages[name];
        return average ? average.averageFun : null;
    });

    const averageDifficultyData = assignmentNames.map(name => {
        const average = averages[name];
        return average ? average.averageDifficulty : null;
    });


    console.log(averageFunData);
    console.log(averageDifficultyData);

    // Set the bar chart data using the created arrays
    const data = {
        labels,
        datasets: [
            {
                label: 'Fun',
                data: averageFunData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Difficulty',
                data: averageDifficultyData,
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