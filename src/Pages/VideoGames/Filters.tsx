import React from 'react'
import styled from 'styled-components'
import Input from '../../Components/Input'
import OrderByInput from '../../Components/OrderByInput'
import ScoreInput from '../../Components/ScoreInput'

const Filters: React.FC = () => {
  
  return (
    <Container>
      <h3>Filter Results</h3>
      
      <Input label="Name (contains)" placeholder="Text string" />
      
      <ScoreInput />
      
      <OrderByInput />
    </Container>
  )
}

export default Filters

const Container = styled.div`
  background-color: #0e1a2b;
  width: 300px;
  padding: 25px;

  h3 {
    font-size: 24px;
    color: white;
    margin: 0 0 30px 0;
  }
`
