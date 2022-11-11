import { getAllStudents } from '../utils/filtersStudentData';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addStudent } from '../actions/index';

const availableStudents = getAllStudents().studentProfiles;

const StudentFilters = ({ value: students, onChange }) => {
    const renderedStudents = availableStudents.map((student) => {
        const checked = students.includes(student)
        const handleChange = () => {
            const changeType = checked ? 'removed' : 'added'
            onChange(student, changeType)
        }

        return (
            <label key={student.firstName}>
                <input
                    type="checkbox"
                    name={student.firstName}
                    checked={checked}
                    onChange={handleChange}
                />
            </label>
        )
    })

    return (
        <div className="filters studentFilters">
            <h5>Filter by Student</h5>
            <form className="colorSelection">{renderedStudents}</form>
        </div>
    )
}

const NavbarStudents = () => {
    const dispatch = useDispatch();
    const { students } = useSelector((state) => state.students)

    const onStudentChange = (student, changeType) =>
        dispatch({
            type: 'studentFilterChanged',
            payload: { student, changeType },
        })

    return (
        <nav className='app-navbar navbar-students'>
            <h3>Select or unselect a student</h3>
            <StudentFilters value={students} onChange={onStudentChange} />
        </nav>
    )

    // return (
    //     <nav className='app-navbar navbar-students'>

    //         <h3>Select or unselect a student</h3>

    //         <div className='AllStudents'>
    //             <button
    //                 className='app-navbar-SelectAll'
    //                 name='allSelect'
    //                 onClick={handleChange}
    //             >Select all students</button>
    //         </div>

    //         {students.map((student, index) => (
    //             <div className='studentCheckbox' key={index}>
    //                 <input
    //                     type='checkbox'
    //                     className='studentCheckbox-input'
    //                     name={student.firstName}
    //                     checked={student?.isChecked || false}
    //                     onChange={handleChange}
    //                 />
    //                 <label className='studentCheckboxLabels'>{student.firstName} {student.lastName}</label>
    //             </div>
    //         ))}
    //     </nav>
    // )

    //         return (
    //             <div>
    //                 <ColorFilters value={students} onChange={onStudentChange} />
    //             </div>
    //         )
    // }

    // const [students, setStudents] = useState([]);
    // const [isAllSelect, setIsAllSelect] = useState(true);

    // useEffect(() => {
    //     setStudents(availableStudents);
    // }, []);

    // const handleChange = (e) => {
    //     const { name } = e.target;
    //     if (name === 'allSelect') {
    //         setIsAllSelect(!isAllSelect)
    //         let tempStudent = students.map((student) => {
    //             return { ...student, isChecked: isAllSelect };
    //         });
    //         setStudents(tempStudent);
    //     } else {
    //         let tempStudent = students.map((student) =>
    //             student.firstName === name ? { ...student, isChecked: isAllSelect } : student
    //         );
    //         setStudents(tempStudent);
    //     }
    // }

}

export default NavbarStudents;



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

    // navigate to student pagina:
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate();
    // if (e.target.checked == true) {
    //     console.log('check', e.target, e.target.value)
    //     navigate('students/' + e.target.value)
    // }
