import React from 'react'
import styled from 'styled-components'
import Input from '../../Components/Input'
import OrderByInput from '../../Components/OrderByInput'
import ScoreInput from '../../Components/ScoreInput'
import Button from '../../Components/Button'

const Filters: React.FC = () => {
  
  return (
    <Container>
      <h3>Filter Results</h3>
      
      <Input label="Name (contains)" placeholder="Text string" />
      
      <ResponsiveContent>
        <ScoreInput />
        
        <OrderByInput />
        
        <Button>
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
  background-color: #0e1a2b;
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
