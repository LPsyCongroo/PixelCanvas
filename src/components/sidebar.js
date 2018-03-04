import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import color from '../assets/color';
import { resizeSidebar } from '../actions';

const StyledSidebar = styled.section`
  position: absolute;
  z-index: 1;
  width: ${props => props.sidebarWidth || 200}px;
  max-width: 320px;
  height: 100%;
  float: left;
  background: ${ color.black };
`;

class Sidebar extends Component{
  render(){
    return (
      <StyledSidebar sidebarWidth={this.props.width} >
      </StyledSidebar>
    );
  }
}

function mapStateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);