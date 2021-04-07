import React from 'react'
import styled from 'styled-components'
import GameItem from './GameItem'
import useGetGames from './useGetGames'

const GamesList: React.FC = () => {
  const [{ data, loading, error }] = useGetGames()
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  
  return (
    <Container>
      {data?.map(game => (
        <GameItem key={game.id} game={game} />
      ))}
    </Container>
  )
}

export default GamesList

const Container = styled.div`
  margin-left: 30px;
  width: 100%;
`
