import React from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import GamesList from './GamesList'

const VideoGames: React.FC = () => {
  
  return (
    <Container>
      <Filters />
      
      <GamesList />
    </Container>
  )
}

export default VideoGames

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`
