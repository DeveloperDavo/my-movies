import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { handleActions } from './reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(handleActions);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
