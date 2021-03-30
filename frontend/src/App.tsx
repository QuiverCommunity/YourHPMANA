import React, { Component } from "react"
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { Root } from './pages/root'

// import 'styles/fonts.css'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Root />
      </ThemeProvider>
    )
  }
}

export default App
