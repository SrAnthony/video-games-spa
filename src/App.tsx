import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import VideoGames from './Pages/VideoGames/VideoGames'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<VideoGames />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
