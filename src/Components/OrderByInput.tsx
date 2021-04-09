import React, { useState } from 'react'
import { InputContainer } from './Input'
import { FiltersActionType, OrderByType } from '../Pages/VideoGames/FiltersReducer'
import styled, { css } from 'styled-components'
import arrow_up from '../Assets/Icons/arrow-up.svg'

type OrderByInputProps = {
  dispatch: React.Dispatch<FiltersActionType>
}

const OrderByInput: React.FC<OrderByInputProps> = ({ dispatch }) => {
  const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC')
  
  const onOrderDirectionChange = () => {
    const new_order = order === 'DESC' ? 'ASC' : 'DESC'
    setOrder(new_order)
    dispatch({ type: 'set_order_direction', payload: new_order })
  }
  
  return (
    <InputContainer>
      <label>
        Order by
      </label>
      
      <Row>
        <DirectionArrowContainer
          title="Change order"
          $reverse={order === 'DESC'}
          onClick={onOrderDirectionChange}
        >
          {/* Using import and img because this project has only one icon. I would use a icon pack in a larger
           project. */}
          <img src={arrow_up} />
        </DirectionArrowContainer>
        
        <select
          onChange={e => dispatch({ type: 'set_order_by', payload: e.target.value as OrderByType })}
        >
          <option value="release_date">
            Release Date
          </option>
          <option value="score">
            Score
          </option>
          <option value="name">
            Name
          </option>
        </select>
      </Row>
    </InputContainer>
  )
}

export default OrderByInput

const Row = styled.div`
  display: flex;
  align-items: flex-end;
`

const DirectionArrowContainer = styled.div<{ $reverse: boolean }>`
  background-color: #5692e8;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  img {
    transition: transform .2s;

    ${p => p.$reverse && css`
      transform: rotate(180deg);
    `}
  }
`
