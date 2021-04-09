import React, { memo } from 'react'
import { InputContainer } from './Input'
import { FiltersActionType, OrderByType, OrderDirectionType } from '../Pages/VideoGames/FiltersReducer'
import styled, { css } from 'styled-components'
import arrow_up from '../Assets/Icons/arrow-up.svg'

type OrderByInputProps = {
  dispatch: React.Dispatch<FiltersActionType>,
  order_by: OrderByType,
  order_direction: OrderDirectionType,
}

const OrderByInput: React.FC<OrderByInputProps> = ({ dispatch, order_by, order_direction }) => {
  const onOrderDirectionChange = () => {
    const new_order = order_direction === 'DESC' ? 'ASC' : 'DESC'
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
          $reverse={order_direction === 'DESC'}
          onClick={onOrderDirectionChange}
        >
          {/* Using import and img because this project has only one icon. I would use a icon pack in a larger
           project. */}
          <img src={arrow_up} />
        </DirectionArrowContainer>
        
        <select
          value={order_by}
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

export default memo(OrderByInput)

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
