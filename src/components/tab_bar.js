import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../assets/color';

const StyledNav = styled.nav`
  width: 100%;
  background: ${color.black};
  height: 48px;
`

export default class TabBar extends Component{
  render(){
    return (
      <StyledNav>
      </StyledNav>
    );
  }
}