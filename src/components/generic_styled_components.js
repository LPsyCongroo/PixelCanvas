import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import color from '../assets/color';

export const StyledToolbar = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${color.black};
  height: 3rem;
  & > div {
    height: 100%;
  }
`;

export const StyledInput = styled.input`
  display: block;
  float: left;
  max-width: 5rem;
  height: 1.5rem;
  margin: 0.75rem;
  font-size: 1rem;
  background: rgba(0,0,0,0);
  color: ${color.white};
  font-weight: 200;
  border: none;
  text-align: ${props => props.disabled ? "center" : "left"};

  &:focus{
    background: ${color.grey1};
    outline: none;
  }
  ${props => props.zoom && css`
    width: 3.5rem;
    text-align: center;    
  `}
  
`;