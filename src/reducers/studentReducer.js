const initialState = {
    students: []
};

console.log(initialState.students)

export default function studentReducer(state = initialState, action) {
    switch (action.type) {
        case 'studentFilterChanged': {
            let { student, changeType } = action.payload
            const { students } = state

            switch (changeType) {
                case 'added': {
                    if (students.includes(student)) {
                        // This student already is set as a filter. Don't change the state.
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
        default:
            return state
    }
}