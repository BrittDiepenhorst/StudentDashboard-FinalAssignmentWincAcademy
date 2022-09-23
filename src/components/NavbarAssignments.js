import React, { useState } from 'react';
import studentData from '../utils/reviewsWincAcademy.json';
import { getAllReviews } from '../utils/filtersStudentData';

const NavbarAssignments = () => {
    const [difficultOrFun, setDifficultOrFun] = useState({
        showDifficult: true,
        showFun: true,
    });

    // hele {} moet nu voldoen aan de string difficulty. 

    // const handleFilterChange = (e) => {
    //     if (difficultOrFun === 'difficulty') {
    //         setDifficultOrFun((!difficultOrFun.showDifficult))
    //     } else if (difficultOrFun === 'fun') {
    //         setDifficultOrFun((!difficultOrFun.showFun))
    //     }
    // };

    const allAssignments = studentData.reviews.map(review => review.assignment);
    const assignments = [];
    allAssignments.forEach(assign => {
        if (!assignments.includes(assign)) {
            assignments.push(assign)
        }
        return assignments;
    })

    return (
        <nav className='app-navbar navbar-assignment'>
            <h3>Select or unselect an assignment</h3>
            <button className='app-navbar-SelectAll'>Select all assignments</button>

            {assignments.map(assignment => (
                <div>
                    <input type="checkbox" />
                    <label>{assignment}</label>
                </div>
            ))}

        </nav>
    )
}

export default NavbarAssignments;
