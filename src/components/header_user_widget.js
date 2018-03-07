import React, { Component } from 'react';
import styled from 'styled-components';

const RoundWidget = styled.div`
  display: block;
  width: 2.25rem;
  height: 2.25rem;
  margin: 0.375rem;
  border-radius: 50%;
  background: limegreen;
  font-size: 18px;
  color: white;
  text-align: center;
  line-height: 2.25rem;
  &:hover{
    cursor: pointer;
  }
`;

export default class UserWidget extends Component{
  render(){
    return (
      <RoundWidget>A</RoundWidget>
    );
  }
}