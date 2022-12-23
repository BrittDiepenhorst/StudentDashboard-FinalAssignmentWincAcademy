import studentReducer from './studentReducer';
import assignmentReducer from './assignmentReducer';
import selectAllReducer from './selectAllReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    students: studentReducer,
    assignments: assignmentReducer,
    selectAll: selectAllReducer,
});

export default allReducers;