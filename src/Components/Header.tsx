import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header: React.FC = () => {
  
  return (
    <Container>
      <MenuItem to="/" title="VIDEO" activeClassName="active" end>
        VIDEO GAMES
      </MenuItem>
      
      <MenuItem to="/contact" title="CONTACT" activeClassName="active" end>
        CONTACT
      </MenuItem>
    </Container>
  )
}

export default Header

const Container = styled.div`
  color: white;
  padding: 100px 0;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 70px; // - 30px from MenuItem
  }
`

const MenuItem = styled(NavLink)`
  text-decoration: none;
  font-size: 42px;
  color: white;
  margin-left: 100px;
  position: relative;

  &.active::before {
    content: attr(title);
    position: absolute;
    left: -35px;
    top: -35px;
    font-size: 60px;
    font-weight: 600;
    opacity: 0.15;
    color: ${p => p.theme.colors.accent_blue};
    white-space: nowrap;
  }

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`
