import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {
  
  return (
    <Container>
      <MenuItem>
        VIDEO GAMES
      </MenuItem>
      
      <MenuItem>
        CONTACT
      </MenuItem>
    </Container>
  )
}

export default Header

const Container = styled.div`
  color: white;
  margin: 100px 0;
`

const MenuItem = styled.button`
  font-size: 42px;
  background-color: transparent;
  border: none;
  padding: 0;
  color: white;
  margin-left: 100px;
`
