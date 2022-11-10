export const addStudent = (student) => {
    return {
        type: 'studentFilterChanged',
        payload: student,
    };
};

// export const deleteSong = (id) => {
//     return {
//         type: 'DELETESTUDENT',
//         payload: id,
//     };
// };