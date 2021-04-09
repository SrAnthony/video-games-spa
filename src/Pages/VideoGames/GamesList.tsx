import React from 'react'
import { FiltersStateType } from './FiltersReducer'
import { SkeletonTheme } from 'react-loading-skeleton'
import styled from 'styled-components'
import GameItem from './GameItem'
import useGetGames from './useGetGames'
import Theme from '../../Utils/Theme'

type GamesListProps = {
  filters: FiltersStateType,
}

const GamesList: React.FC<GamesListProps> = ({ filters }) => {
  const [games, loading] = useGetGames(filters)
  
  return (
    <Container>
      <SkeletonTheme color="rgb(8, 18, 33)" highlightColor={Theme.colors.content_background}>
        {games.length === 0 && loading && [1, 2, 3, 4, 5].map(i => (
          <GameItem key={`loading-${i}`} />
        ))}
        
        {games.map(game => (
          <GameItem key={game.id} game={game} />
        ))}
      </SkeletonTheme>
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
