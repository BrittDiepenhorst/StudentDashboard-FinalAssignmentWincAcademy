import studentReducer from './studentReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    students: studentReducer,
});

export default allReducers;