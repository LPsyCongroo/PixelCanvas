import React, { Component } from 'react';
import styled from 'styled-components';

import TabBar from './tab_bar';
import Menu from './menu';
import color from '../assets/color';

const StyledHeader = styled.header`
  width: 100%;
  background: ${color.grey3};
`

export default class Header extends Component{
  render(){
    return (
      <StyledHeader>
        <Menu/>
        <TabBar/>
      </StyledHeader>
    );
  }
}