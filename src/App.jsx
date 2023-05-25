import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: black;
  }`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Dashboard/>
    </>

  )

}

export default App