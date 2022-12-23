const initialState = {
    students: [],
};

console.log(initialState.students)

export default function studentReducer(state = initialState, action) {
    switch (action.type) {
        case 'checkedFilterChanged': {
            return {
                ...state
            }
        }
        case 'studentFilterChanged': {
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
        default:
            return state
    }
}