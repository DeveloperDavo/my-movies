import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

export const changeMinRating = minRating => {
  return {
    type: 'changeMinRating',
    minRating
  }
}

function handleActions(state = { minRating: 0 }, action) {
  switch (action.type) {
    case 'changeMinRating':
      return { minRating: action.minRating }
    default:
      return state
  }
}

const store = createStore(handleActions);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
