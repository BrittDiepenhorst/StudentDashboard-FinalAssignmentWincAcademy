import React, { useState, useEffect } from 'react';
import { getAllReviewsAssignments } from '../utils/filtersStudentData';

const allReviewsAssignments = getAllReviewsAssignments();
console.log(allReviewsAssignments)

// export function UseAssignmentHook() {
//     const [assignments, setAssignments] = useState([]);
//     return [assignments, setAssignments]
// }

const NavbarAssignments = () => {
    const [assignments, setAssignments] = useState([]);
    const [isAllSelect, setIsAllSelect] = useState(true);

    useEffect(() => {
        setAssignments(allReviewsAssignments);
    }, []);

    const handleChange = (e) => {
        const { name } = e.target;
        if (name === 'allSelect') {
            setIsAllSelect(!isAllSelect)
            let tempAssigment = assignments.map((assignment) => {
                return { ...assignment, isChecked: isAllSelect };
            });
            setAssignments(tempAssigment);
        } else {
            let tempAssigment = assignments.map((assignment) =>
                assignment.name === name ? { ...assignment, isChecked: isAllSelect } : assignment
            );
            setAssignments(tempAssigment);
        }
    }

    return (
        <nav className='app-navbar navbar-assignment'>

            <h3>Select or unselect an assignment</h3>

            <div className='AllAssignments'>
                <button
                    className='app-navbar-SelectAll'
                    name="allSelect"
                    onClick={handleChange}
                >Select all assignments</button>
            </div>

            {assignments.map((assignment, index) => (
                <div className='assignmentCheckbox' key={index}>
                    <input
                        type='checkbox'
                        className='assignmentCheckbox-input'
                        name={assignment.name}
                        checked={assignment?.isChecked || false}
                        onChange={handleChange}
                    />
                    <label className='assignmentCheckboxLabels'>{assignment.name}</label>
                </div>
            ))}

        </nav>
    )
}

export default NavbarAssignments;