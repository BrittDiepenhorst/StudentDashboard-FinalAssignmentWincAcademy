export const addStudent = (student) => {
    return {
        type: 'STUDENT_CHECKBOX_CHANGED',
        payload: student,
    };
};

export const addAssignment = (assignment) => {
    return {
        type: 'ASSIGNMENT_CHECKBOX_CHANGED',
        payload: assignment,
    };
};

export function SELECT_ALL_CHECKBOXES() {
    return {
        type: 'SELECT_ALL_CHECKBOXES',
    };
}