import React, { useState } from 'react';
import studentData from '../utils/mockdata_Winc.json'
// import assignments from '../utils/functions'

const NavbarAssignments = () => {
    const [difficultOrFun, setDifficultOrFun] = useState({
        showDifficult: true,
        showFun: true,
    });

    const handleFilterChange = (e) => {
        if (difficultOrFun === 'difficulty') {
            setDifficultOrFun((!difficultOrFun.showDifficult))
        } else if (difficultOrFun === 'fun') {
            setDifficultOrFun((!difficultOrFun.showFun))
        }
    };

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


            {/* {assignments.forEach(assignment => {
                return <div>{assignment}</div>
                // <input type="checkbox" /> && <label>{assignment}</label>
            })
            } */}

        </nav>
    )
}

export default NavbarAssignments;

// const songRow = songs.map(song => (
//     <tr key={song.id}>
//         <td>{song.songTitle}</td>
//         <td>{song.artistName}</td>
//         <td>{song.genre}</td>
//         <td>{song.rating}</td>
//         <td><button onClick={(e) => {
//             console.log(`Deleting ${song.id}`);
//             dispatch(deleteSong(song.id));
//         }}>Delete Song</button></td>
//     </tr>