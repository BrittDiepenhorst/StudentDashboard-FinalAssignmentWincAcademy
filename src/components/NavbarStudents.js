import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllStudents } from '../utils/filtersStudentData';

const availableStudents = getAllStudents().studentProfiles;

const StudentFilters = ({ value: students, onChange }) => {
    const renderedStudents = availableStudents.map((student) => {
        const checked = students ? students.includes(student) : true;
        console.log(checked)
        const handleChange = () => {
            const changeType = checked ? 'removed' : 'added'
            onChange(student, changeType)
        }
        return (
            <label key={student.id}>
                <input
                    type="checkbox"
                    name={student.firstName}
                    checked={checked}
                    onChange={handleChange}
                    className="checkboxdetails checkboxstudents"
                />{student.firstName} {student.lastName}
            </label>
        )
    })

    return (
        <div className="filters studentFilters">
            <form className="studentSelection">{renderedStudents}</form>
        </div>
    )
}

const NavbarStudents = () => {
    const dispatch = useDispatch();
    const { students } = useSelector((state) => state.students)
    console.log(students)

    const handleSelectAll = (event) => {
        const checkboxes = document.querySelectorAll('.checkboxstudents');
        const isChecked = !event.target.checked;

        const availableStudents = getAllStudents().studentProfiles;

        dispatch({
            type: 'SELECT_ALL_STUDENTS',
            payload: availableStudents,
        });

        checkboxes.forEach((checkbox) => {
            checkbox.checked = isChecked;
        });
    };

    const onStudentChange = (student, changeType) =>
        dispatch({
            type: 'STUDENT_CHECKBOX_CHANGED',
            payload: { student, changeType },
        })

    return (
        <nav className='app-navbar navbar-students'>
            <h3>Select or unselect a student</h3>
            <div className='AllStudents'>
                <button
                    className='app-navbar-SelectAll'
                    name='allSelect'
                    onClick={handleSelectAll}
                >Select all students</button>
            </div>
            <StudentFilters value={students} onChange={onStudentChange} />
        </nav>
    )
}

export default NavbarStudents;