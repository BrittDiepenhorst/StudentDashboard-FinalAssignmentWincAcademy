import { getAllReviewsAssignments } from '../utils/filtersStudentData';

const initialState = {
    assignments: [],
    selectAll: false,
};

export default function assignmentReducer(state = initialState, action) {
    switch (action.type) {
        case 'ASSIGNMENT_CHECKBOX_CHANGED': {
            let { assignment, changeType } = action.payload
            const { assignments } = state

            switch (changeType) {
                case 'added': {
                    if (assignments.includes(assignment)) {
                        return state
                    }

                    return {
                        ...state,
                        assignments: state.assignments.concat(assignment),
                    }
                }
                case 'removed': {
                    return {
                        ...state,
                        assignments: state.assignments.filter(
                            (existingAssignment) => existingAssignment !== assignment
                        ),
                    }
                }
                default:
                    return state
            }
        }
        case 'SELECT_ALL_ASSIGNMENTS': {
            const allAssigments = action.payload;
            const { assignments, selectAll } = state;
            const newAssignments = selectAll ? [] : allAssigments;
            return {
                ...state,
                assignments: newAssignments,
                selectAll: !selectAll,
            };
        }
        default:
            return state
    }
}