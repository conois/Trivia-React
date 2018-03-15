import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; 
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	 <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
	document.getElementById('root'));

registerServiceWorker();
