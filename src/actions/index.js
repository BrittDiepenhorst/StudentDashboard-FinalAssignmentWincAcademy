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

export function SELECT_ALL_STUDENTS() {
    return {
        type: 'SELECT_ALL_STUDENTS',
    };
}

export function SELECT_ALL_ASSIGNMENTS() {
    return {
        type: 'SELECT_ALL_ASSIGNMENTS',
    };
}