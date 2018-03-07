import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './header_menu';
import TabContainer from './header_tab_container';
import HeaderToolbar from './header_toolbar';
import {StyledToolbar} from './generic_styled_components';
import color from '../assets/color';

const StyledHeader = styled.header`
  width: 100%;
  background: ${color.grey3};
`;

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