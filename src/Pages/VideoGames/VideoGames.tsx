import React, { useReducer } from 'react'
import FiltersReducer, { initial_values } from './FiltersReducer'
import styled from 'styled-components'
import Filters from './Filters'
import GamesList from './GamesList'

const VideoGames: React.FC = () => {
  const [filters, dispatch] = useReducer(FiltersReducer, initial_values)
  
  return (
    <Container>
      <Filters filters={filters} dispatch={dispatch} />
      
      <GamesList filters={filters} />
    </Container>
  )
}

export default VideoGames

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`
