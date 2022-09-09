import React, { useState } from 'react';

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

    return (
        <nav className='app-navbar navbar-assignment'>
            <h3>Select or unselect an assignment</h3>
            <input type="checkbox" />
            <label>[Assign1]</label>
            <button className='app-navbar-SelectAll'>Select all assignments</button>
        </nav>
    )
}

export default NavbarAssignments;