import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import netlifyIdentity from 'netlify-identity-widget'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

window.netlifyIdentity = netlifyIdentity
// You must run this once before trying to interact with the widget
netlifyIdentity.init()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
