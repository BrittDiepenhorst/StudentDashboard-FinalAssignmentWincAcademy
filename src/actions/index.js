export const addStudent = (student) => {
    return {
        type: 'filters/studentFilterChanged',
        payload: student,
    };
};

export const addAssignment = (assignment) => {
    return {
        type: 'assignmentFilterChanged',
        payload: assignment,
    }
}