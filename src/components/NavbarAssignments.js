import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllReviewsAssignments } from '../utils/filtersStudentData';

const allReviewsAssignments = getAllReviewsAssignments();

const NavbarFilters = ({ value: assigments, onChange }) => {
    const renderedAssigments = allReviewsAssignments.map((assignment) => {
        const checked = assigments ? assigments.includes(assignment) : true;
        const handleChange = () => {
            const changeType = checked ? 'removed' : 'added'
            onChange(assignment, changeType)
        }
        return (
            <label key={assignment.name}>
                <input
                    type="checkbox"
                    name={assignment.name}
                    checked={checked}
                    onChange={handleChange}
                    className="assignmentCheckboxLabels"
                />{assignment.name}
            </label>
        )
    })
    return (
        <div className="filters">
            <form className="assignmentSelection">{renderedAssigments}</form>
        </div>
    )
}

const NavbarAssignments = () => {
    const dispatch = useDispatch();
    const { assignments } = useSelector((state) => state.assignments)

    const handleSelectAll = () => {
        dispatch({
            type: 'SELECT_ALL_ASSIGNMENTS',
        })
    }

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
            <NavbarFilters value={assignments} onChange={onAssignmentChange} />
        </nav>
    )
}

export default NavbarAssignments;