import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import color from '../assets/color';
import { Close } from '../assets/icons';

const StyledTab = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.active ? color.black : color.grey1 };
  border: solid 1px ${color.grey3};
  border-top: none;
  border-bottom: none;
  line-height: 2.625rem;
  padding: 0 2rem;

  &:hover{
    cursor: pointer;
    background: ${props => props.active ? color.black : color.grey3};
  }

  & > span {
    display: ${props => props.active ? "block" : "none"};
    color: ${color.grey7}
  }
`;

const closeStyle = `
  position: absolute;
  top:0;
  right:0;
  width: 0.7rem;
  height: 0.7rem;
  padding: 0;
  margin: 0.25rem;
`

export default class Tab extends Component {
  handleClose(e){
    e.stopPropagation();
  }
  render(){
    return (
      <StyledTab {...this.props} >
        {this.props.children}
        <Close click css={closeStyle} onClick={this.handleClose}/>
      </StyledTab>
    );
  }
}