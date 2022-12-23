const initialState = {
    selectAll: false,
};

export default function selectAllReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_ALL_CHECKBOXES':
            // if (state.selectAll  = true) {
            //     state.students = Allstudents 
            // state.assignments = Allassignments
            // }
            return state = !state;
        default:
            return state;
    }
}