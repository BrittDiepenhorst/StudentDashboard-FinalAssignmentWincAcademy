export const addStudent = (student) => {
    return {
        type: 'studentFilterChanged',
        payload: student,
    };
};

export const addAssignment = (assignment) => {
    return {
        type: 'assignmentFilterChanged',
        payload: assignment,
    }
}

// export const deleteSong = (id) => {
//     return {
//         type: 'DELETESTUDENT',
//         payload: id,
//     };
// };