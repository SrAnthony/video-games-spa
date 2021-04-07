import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header: React.FC = () => {
  
  return (
    <Container>
      <MenuItem to="/">
        VIDEO GAMES
      </MenuItem>
      
      <MenuItem to="/contact">
        CONTACT
      </MenuItem>
    </Container>
  )
}

export default Header

const Container = styled.div`
  color: white;
  margin: 100px 0;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 70px; // - 30px from MenuItem
  }
`

const MenuItem = styled(Link)`
  text-decoration: none;
  font-size: 42px;
  color: white;
  margin-left: 100px;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`
