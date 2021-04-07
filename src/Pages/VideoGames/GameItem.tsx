import React from 'react'
import { GameType } from './useGetGames'
import styled from 'styled-components'
import dayjs from 'dayjs'

const GameItem: React.FC<{ game: GameType }> = ({ game }) => {
  
  return (
    <Container>
      <GameImage />
      
      <Content>
        <h2>
          {game.name}
        </h2>
        <h3>
          Release Date: {dayjs(game.first_release_date).format('DD/MM/YYYY')}
        </h3>
        
        <div>
          {game.summary}
        </div>
      </Content>
      
      <Rating>
        {Math.round(game.rating)}
      </Rating>
    </Container>
  )
}

export default GameItem

const Container = styled.div`
  background-color: #0e1a2b;
  margin-bottom: 15px;
  height: 180px;
  max-height: 180px;
  overflow: hidden;
  display: flex;
`

const Rating = styled.div`
  border-radius: 50%;
  background-color: #5692e8;
  color: white;
  font-size: 20px;
  min-width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-right: 25px;
`

const GameImage = styled.div`
  height: 180px;
  min-width: 180px;
  background-color: black;
`

const Content = styled.div`
  padding: 25px;
  color: #c1d1e8;
  height: 155px; // 180px container height - 25px container padding
  max-height: 155px;
  overflow: hidden;
  flex: 1;

  h2 {
    color: white;
    margin: 0;
  }

  h3 {
    font-weight: normal;
    margin: 0 0 15px 0;
  }
`
