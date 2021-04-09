import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import VideoGames from './Pages/VideoGames/VideoGames'
import styled, { ThemeProvider } from 'styled-components'
import Header from './Components/Header'
import Theme from './Utils/Theme'

import './global.css'

const App = () => {
  
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Content>
          <Header />
          
          <Routes>
            <Route path="/" element={<VideoGames />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
      </Container>
    </ThemeProvider>
  )
}

export default App

const Container = styled.div`
  min-height: 100vh;
`

const Content = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 30px;
`
