import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.section`
  width: 20vw;
  max-width: 320px;
  resize: horizontal;
  overflow: auto;
  background: palegoldenrod;
`;

export default class Sidebar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <StyledSidebar>
        
      </StyledSidebar>
    );
  }
}