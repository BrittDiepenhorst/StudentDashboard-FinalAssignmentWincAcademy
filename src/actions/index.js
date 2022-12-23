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

export function selectAllStudents() {
    return {
        type: 'SELECT_ALL_STUDENTS',
    };
}

export function selectAllAssignments() {
    return {
        type: 'SELECT_ALL_ASSIGNMENTS',
    };
}