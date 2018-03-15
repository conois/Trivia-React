import {getQuestion} from './easyReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({easyQuestions: getQuestion})

export default rootReducer;