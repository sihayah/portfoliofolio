import React from 'react';
import Hamburger from '../Hamburger';
import styled from 'styled-components';
import './style.css'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 99999;
  .logo {
    padding: 15px 0;
  }
`;
 
const Menu = () => {
  return (
    <Nav className='nav'>
      <Hamburger />
    </Nav>
  )
}

export default Menu;