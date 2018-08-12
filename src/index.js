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

const user = netlifyIdentity.currentUser()
console.log(user)

netlifyIdentity.on('init', user => console.log('init'))
netlifyIdentity.on('login', user => console.log('login'))
netlifyIdentity.on('logout', () => console.log('Logged out'))
netlifyIdentity.on('error', err => console.error(err.stack))
netlifyIdentity.on('open', () => console.log('Widget opened'))
netlifyIdentity.on('close', () => console.log('Widget closed'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
