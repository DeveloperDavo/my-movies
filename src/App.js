import React, { Component } from 'react'
import { Main } from './containers'
import { Header } from './components'
import styled from 'styled-components'

class App extends Component {
  render () {
    const AppWrapper = styled.div`
      text-align: center;
    `
    return (
      <AppWrapper>
        <Header />
        <Main />
      </AppWrapper>
    )
  }
}

export default App
