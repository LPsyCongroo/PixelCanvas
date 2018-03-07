import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../assets/color';
import SidebarToolbar from './sidebar_toolbar';
import SidebarTab from './sidebar_tab';

const StyledSidebar = styled.section`
  position: absolute;
  z-index: 1;
  width: ${props => props.sidebarWidth || 0}px;
  min-width: 15rem;
  max-width: 20rem;
  height: 100%;
  float: left;
  background: ${ color.black };
`;

export default class Sidebar extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: "EDIT"
    }
    this.handleSetMode = this.handleSetMode.bind(this);
  }

  handleSetMode(newMode){
    this.setState({
      mode: newMode
    });
  }

  render(){
    
    return (
      <StyledSidebar >
        <SidebarTab mode={this.state.mode} setMode={this.handleSetMode} />
        <SidebarToolbar mode={this.state.mode} />
        <hr/>
      </StyledSidebar>
    );
  }
}