import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './header_menu';
import TabContainer from './header_tab_container';
import HeaderToolbar from './header_toolbar';
import color from '../assets/color';

const StyledHeader = styled.header`
  width: 100%;
  background: ${color.grey3};
`

const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${color.black};
  height: 3rem;
  & > div {
    height: 100%;
  }
`

export default class Header extends Component{
  render(){
    return (
      <StyledHeader>
        <Menu/>
        <StyledToolbar>
          <TabContainer/>
          <HeaderToolbar/>
        </StyledToolbar>
      </StyledHeader>
    );
  }
}