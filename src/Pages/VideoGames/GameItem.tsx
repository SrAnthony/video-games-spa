import React from 'react'
import { GameType } from './useGetGames'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Skeleton from 'react-loading-skeleton'

const GameItem: React.FC<{ game?: GameType }> = ({ game }) => {
  
  return (
    <Container>
      <GameImage />
      
      <Content>
        <h2>
          {game?.name || <Skeleton width="20ch" />}
        </h2>
        <h3>
          {game
            ? `Release Date: ${dayjs(game.first_release_date).format('DD/MM/YYYY')}`
            : <Skeleton width="22ch" />
          }
        </h3>
        
        <div>
          {game
            ? game.summary
            : <Skeleton count={3} width="100%" />
          }
        </div>
      </Content>
      
      {game && (
        <Rating>
          {Math.round(game.rating)}
        </Rating>
      )}
    </Container>
  )
}

export default GameItem

const Container = styled.div`
  background-color: ${p => p.theme.colors.content_background};
  margin-bottom: 15px;
  height: 180px;
  max-height: 180px;
  overflow: hidden;
  display: flex;
  position: relative;

  @media (max-width: 700px) {
    flex-direction: column;
    max-height: unset;
    height: unset;
  }
`

const Rating = styled.div`
  border-radius: 50%;
  background-color: ${p => p.theme.colors.accent_blue};
  color: white;
  font-size: 20px;
  min-width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-right: 25px;

  @media (max-width: 700px) {
    height: 35px;
    min-width: 35px;
    font-size: 18px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px 15px 0 0;
  }
`

const GameImage = styled.div`
  height: 180px;
  min-width: 180px;
  background-color: black;
`

const Content = styled.div`
  padding: 25px;
  color: ${p => p.theme.colors.text_color};
  height: 155px; // 180px container height - 25px container padding
  max-height: 155px;
  overflow: hidden;
  flex: 1;
  width: 100%;

  h2 {
    color: white;
    margin: 0;
  }

  h3 {
    font-weight: normal;
    margin: 0 0 15px 0;
  }
`
