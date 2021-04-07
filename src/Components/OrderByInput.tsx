import React, { useState } from 'react'
import { InputContainer } from './Input'
import styled, { css } from 'styled-components'
import arrow_up from '../Assets/Icons/arrow-up.svg'

const OrderByInput: React.FC = () => {
  const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC')
  
  return (
    <InputContainer>
      <label>
        Order by
      </label>
      
      <Row>
        <DirectionArrowContainer
          title="Change order"
          $reverse={order === 'DESC'}
          onClick={() => setOrder(order === 'DESC' ? 'ASC' : 'DESC')}
        >
          {/* Using import and img because this project has only one icon. I would use a icon pack in a larger
           project. */}
          <img src={arrow_up} />
        </DirectionArrowContainer>
        
        <select>
          <option>
            Release Date
          </option>
          <option>
            Score
          </option>
          <option>
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
