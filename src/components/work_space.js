import React, { Component } from 'react';
import styled from 'styled-components';

import PixelCanvas from './pixel_canvas'

const StyledWorkSpace = styled.section`
  width: 100%;
  background: #ccc;
`;

export default class WorkSpace extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <StyledWorkSpace>
        <PixelCanvas/>
      </StyledWorkSpace>
    );
  }
}