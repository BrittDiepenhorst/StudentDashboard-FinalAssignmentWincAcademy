import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllReviewsAssignments } from '../utils/filtersStudentData';

const allReviewsAssignments = getAllReviewsAssignments();
console.log(allReviewsAssignments)

const AssignmentFilters = ({ value: assigments, onChange }) => {
    const renderedAssignments = allReviewsAssignments.map((assignment) => {
        const checked = assigments ? assigments.includes(assignment) : true;
        const handleChange = () => {
            const changeType = checked ? 'removed' : 'added'
            onChange(assignment, changeType)
        }

        return (
            <label key={assignment.id}>
                <input
                    type="checkbox"
                    name={assignment.name}
                    checked={checked}
                    onChange={handleChange}
                    className="checkboxdetails checkboxassignments"
                />{assignment.name}
            </label>
        )
    })
    return (
        <div className="filters assignmentFilters">
            <form className="assignmentSelection">{renderedAssignments}</form>
        </div>
    )
}

const NavbarAssignments = () => {
    const dispatch = useDispatch();
    const { assignments } = useSelector((state) => state.assignments)

    const handleSelectAll = (event) => {
        const checkboxes = document.querySelectorAll('.checkboxassignments');
        const isChecked = !event.target.checked;

        const allReviewsAssignments = getAllReviewsAssignments();

        dispatch({
            type: 'SELECT_ALL_ASSIGNMENTS',
            payload: allReviewsAssignments,
        });
        checkboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        })
    };

    const onAssignmentChange = (assignment, changeType) =>
        dispatch({
            type: 'ASSIGNMENT_CHECKBOX_CHANGED',
            payload: { assignment, changeType }
        })

    return (
        <nav className='app-navbar navbar-assignment'>
            <h3>Select or unselect an assignment</h3>
            <div className='AllAssignments'>
                <button
                    className='app-navbar-SelectAll'
                    name='allSelect'
                    onClick={handleSelectAll}
                >Select all assignments</button>
            </div>
            <AssignmentFilters value={assignments} onChange={onAssignmentChange} />
        </nav>
    )
}

export default NavbarAssignments;