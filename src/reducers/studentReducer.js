import { getAllStudents } from '../utils/filtersStudentData';

const initialState = {
    students: [],
    allStudents: []
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
            return getAllStudents();
        }
        default:
            return state
    }
}