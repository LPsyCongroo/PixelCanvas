import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../assets/color';

const ZoomInput = styled.input`
  float: left;
  width: 3.5rem;
  height: 1.5rem;
  margin: 0.75rem;
  font-size: 1rem;
  background: ${color.black};
  color: ${color.white};
  font-weight: 200;
  text-align: center;
  border: none;
  &:focus{
    background: ${color.grey1};
    outline: none;
  }

  &:hover{
    background: ${color.grey1};
  }
`

export default class ZoomWidget extends Component{
  render(){
    return (
      <ZoomInput value="100%" />
    )
  }
}