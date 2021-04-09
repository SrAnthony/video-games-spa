import React from 'react'
import { FiltersStateType } from './FiltersReducer'
import styled from 'styled-components'
import GameItem from './GameItem'
import useGetGames from './useGetGames'

type GamesListProps = {
  filters: FiltersStateType,
}

const GamesList: React.FC<GamesListProps> = ({ filters }) => {
  const [games, loading, error] = useGetGames(filters)
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  
  return (
    <Container>
      {games?.map(game => (
        <GameItem key={game.id} game={game} />
      ))}
    </Container>
  )
}

export default GamesList

const Container = styled.div`
  margin-left: 30px;
  width: 100%;

  @media (max-width: 1024px) {
    margin: 0;
  }
`
