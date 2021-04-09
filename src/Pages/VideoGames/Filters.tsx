import React from 'react'
import { FiltersActionType, FiltersStateType } from './FiltersReducer'
import styled from 'styled-components'
import Input from '../../Components/Input'
import OrderByInput from '../../Components/OrderByInput'
import Button from '../../Components/Button'

type FiltersProps = {
  filters: FiltersStateType,
  dispatch: React.Dispatch<FiltersActionType>
}

const Filters: React.FC<FiltersProps> = ({ dispatch, filters }) => {
  
  return (
    <Container>
      <h3>Filter Results</h3>
      
      <Input
        label="Name (contains)"
        placeholder="Text string"
        value={filters.name}
        onChange={e => dispatch({ type: 'set_name', payload: e.target.value })}
      />
      
      <ResponsiveContent>
        <Input
          label="Minimum Score"
          placeholder="1 - 100"
          value={filters.minimum_rating ? String(filters.minimum_rating) : ''}
          onChange={e => dispatch({ type: 'set_minimum_rating', payload: e.target.valueAsNumber })}
          type="number"
          max={100}
          min={1}
        />
        
        <OrderByInput
          dispatch={dispatch}
          order_by={filters.order_by}
          order_direction={filters.order_direction}
        />
        
        <Button onClick={() => dispatch({ type: 'clear' })}>
          Clear
        </Button>
      </ResponsiveContent>
    </Container>
  )
}

export default Filters

const ResponsiveContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 1024px) and (min-width: 700px) {
    flex-wrap: nowrap;

    & > div {
      margin-right: 15px;
    }
  }
`

const Container = styled.div`
  background-color: ${p => p.theme.colors.content_background};
  width: 300px;
  min-width: 300px;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 30px;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 0 100px 0;
    position: static;
  }

  h3 {
    font-size: 24px;
    color: white;
    margin: 0 0 30px 0;
  }
`
