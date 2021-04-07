import React from 'react'
import styled from 'styled-components'
import Filters from './Filters'

const VideoGames: React.FC = () => {
  
  return (
    <Container>
      <Filters />
    </Container>
  )
}

export default VideoGames

const Container = styled.div`
  display: flex;
`
