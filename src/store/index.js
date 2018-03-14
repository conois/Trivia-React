import { createStore } from 'redux'; 
import { printQuestion } from './../reducers/questionEasyReducer'; 

const store = createStore(printQuestion)
