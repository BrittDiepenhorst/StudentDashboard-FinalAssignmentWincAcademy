const initialState = {
    students: []
};

console.log(initialState.students)

// const studentReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADDSTUDENT':
//             return {
//                 ...state,
//                 students: [...state.students, action.payload]
//             };
//         case 'DELETESTUDENT':
//             return {
//                 ...state,
//                 students: state.students.filter(student => student.id !== action.payload)
//             };
//         default:
//             return state;
//     }
// };

// export default studentReducer;


export default function studentReducer(state = initialState, action) {
    switch (action.type) {
        case 'studentFilterChanged': {
            let { student, changeType } = action.payload
            const { students } = state

            switch (changeType) {
                case 'added': {
                    if (students.includes(student)) {
                        // This color already is set as a filter. Don't change the state.
                        return state
                    }

                    return {
                        ...state,
                        colors: state.students.concat(student),
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