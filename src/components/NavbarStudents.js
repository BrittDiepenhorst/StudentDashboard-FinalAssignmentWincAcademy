import { getAllStudents } from '../utils/filtersStudentData';
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const studentsData = getAllStudents().studentProfiles;

const NavbarStudents = () => {
    const [students, setStudents] = useState([]);
    const [isAllSelect, setIsAllSelect] = useState(true);

    useEffect(() => {
        setStudents(studentsData);
    }, []);

    const handleChange = (e) => {
        const { name } = e.target;
        if (name === "allSelect") {
            setIsAllSelect(!isAllSelect)
            let tempStudent = students.map((student) => {
                return { ...student, isChecked: isAllSelect };
            });
            setStudents(tempStudent);
        } else {
            let tempStudent = students.map((student) =>
                student.firstName === name ? { ...student, isChecked: isAllSelect } : student
            );
            setStudents(tempStudent);
        }
    }

    // students.filter(student => student.isChecked).map(student => return student /** hier zijn enkel studenten die gechecked zijn*/)
    // een 2e array voor enkel de studenten die je mee wilt nemen voor je grafiek kan zeker ja! het is dan wel belangrijk niet te vergeten om studenten er uit te filteren als de checkbox niet aangevinkt is. en vice versa

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
                <button
                    className='app-navbar-SelectAll'
                    name="allSelect"
                    onClick={handleChange}
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
