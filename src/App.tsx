import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import VideoGames from './Pages/VideoGames/VideoGames'
import styled from 'styled-components'
import Header from './Components/Header'
import './global.css'

const App = () => {
  
  return (
    <Container>
      <Content>
        <Header />
        
        <Routes>
          <Route path="/" element={<VideoGames />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
    </Container>
  )
}

export default App

const Container = styled.div`
  min-height: 100vh;
`

const Content = styled.div`
  max-width: 1500px;
  margin: auto;
`
