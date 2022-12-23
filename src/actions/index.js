export const addStudent = (student) => {
    return {
        type: 'studentFilterChanged',
        payload: student,
    };
};

export const checkStudent = () => {
    return {
        type: 'checkedFilterChanged',
        payload: true,
    };
};

export const addAssignment = (assignment) => {
    return {
        type: 'assignmentFilterChanged',
        payload: assignment,
    };
};

export function toggleCheckbox(id, assignment) {
    return {
        type: 'TOGGLE_CHECKBOX',
        id,
        assignment
    };
}