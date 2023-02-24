const initialState = {
    students: [],
    selectAll: false,
};

export default function studentReducer(state = initialState, action) {
    switch (action.type) {
        case 'STUDENT_CHECKBOX_CHANGED': {
            let { student, changeType } = action.payload
            const { students } = state

            switch (changeType) {
                case 'added': {
                    if (students.includes(student)) {
                        return state
                    }
                    return {
                        ...state,
                        students: state.students.concat(student),
                    }
                }
                case 'removed': {
                    return {
                        ...state,
                        students: state.students.filter(
                            (existingStudent) => existingStudent !== student
                        ),
                    }
                }
                default:
                    return state
            }
        }
        case 'SELECT_ALL_STUDENTS': {
            const allStudents = action.payload;
            const { students, selectAll } = state;
            const newStudents = selectAll ? [] : allStudents;
            return {
                ...state,
                students: newStudents,
                selectAll: !selectAll,
            };
        }
        default:
            return state
    }
}