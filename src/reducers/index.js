import getQuestion from './easyReducer';
import { combineReducer } from 'redux';

const rootReducer = combineReducer({easyQuestions: getQuestion})