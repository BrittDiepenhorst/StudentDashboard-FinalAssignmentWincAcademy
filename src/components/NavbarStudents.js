import { getAllStudents } from '../utils/filtersStudentData';
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const studentsData = getAllStudents().studentProfiles;

console.log(studentsData)

const NavbarStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(studentsData);
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempStudent = students.map((student) => {
                return { ...student, isChecked: checked };
            });
            setStudents(tempStudent);
        } else {
            let tempStudent = students.map((student) =>
                student.firstName === name ? { ...student, isChecked: checked } : student
            );
            setStudents(tempStudent);
        }
    }

    // const newArray = () => {
    //     if (isChecked === checked ) {

    //     }
    // }

    // if (e.target.checked == true) {
    //     const newArray = [{
    //         name: e.target.value
    //     }]
    //     newArray.push(e.target)
    //     console.log(newArray)
    // wanneer je op een input  met de checkbox drukt kun je op een nieuwe array pushen met hierbinnen een Object die 2 dingen bevat. naam & of hij mee moet genomen worden in de grafiek. 
    // met Array.filter kun je daadwerkelijk de data filteren die je wilt hebben. en deze gefilterde array dan in een Victory chart weergeven

    return (
        <nav className='app-navbar navbar-students'>

            <h3>Select or unselect a student</h3>

            <div className='AllStudents'>
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="allSelect"
                    // checked={
                    //     students.filter((student) => student?.isChecked !== true).length < 1
                    // }
                    checked={!students.some((student) => student?.isChecked !== true)}
                    onChange={handleChange}
                />
                <label>All Select</label>

                <button
                    className='app-navbar-SelectAll'
                    name="allSelect"
                    checked={!students.some((student) => student?.isChecked !== true)}
                    onClick={(e) => { handleChange(e) }}
                >Select all students</button>
            </div>

            {students.map((student, index) => (
                <div className='studentCheckbox' key={index}>
                    <input
                        type="checkbox"
                        className="studentCheckbox-input"
                        name={student.firstName}
                        checked={student?.isChecked || false}
                        onChange={handleChange}
                    />
                    <label className='studentCheckboxLabels'>{student.firstName} {student.lastName}</label>
                </div>
            ))}
        </nav>
    );
}

export default NavbarStudents;

    // const navigate = useNavigate();

    // const handleAllStudents = (e) => {
    //     console.log('you clicked')
    //     if ( === false) {
    //         setChecked(true)
    //     }
    // }

    // navigate to student pagina:
    // if (e.target.checked == true) {
    //     console.log('check', e.target, e.target.value)
    //     navigate('students/' + e.target.value)
    // };

    // const handleChange = (e) => {
    //     setSongToAdd((prev) => ({
    //         ...prev,
    //         [e.target.name]: (e.target.value),
    //         id: generateUniqueID(),
    //     }))
    // };
