import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App';

jest.mock('./containers');

it('renders without crashing', () => {
  const div = document.createElement('div');
  const provider = 
    <Provider store={store}>
      <App />
    </Provider>
  ReactDOM.render(provider, div);
  ReactDOM.unmountComponentAtNode(div);
});
