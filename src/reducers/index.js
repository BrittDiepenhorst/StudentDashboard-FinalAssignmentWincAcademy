import studentReducer from './studentReducer';
import assignmentReducer from './assignmentReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    students: studentReducer,
    assignments: assignmentReducer
});

export default allReducers;