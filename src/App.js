import React, { Component } from 'react'
import { Main } from './containers'
import { Header } from './components'
import styled from 'styled-components'
import netlifyIdentity from 'netlify-identity-widget'

class App extends Component {
  handleLogIn () {
    // You can import the widget into any component and interact with it.
    netlifyIdentity.open()
  }

  render () {
    const AppWrapper = styled.div`
      text-align: center;
    `
    return (
      <AppWrapper>
        <Header />
        <div>
          <button onClick={this.handleLogIn} >Log in with netlify</button>
        </div>
        <Main />
      </AppWrapper>
    )
  }
}

export default App
