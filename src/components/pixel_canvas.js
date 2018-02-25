import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCanvasGrid = styled.div`
      display: grid;
      grid-template-rows: repeat( ${props => props.y} , 1fr);
      grid-template-columns: repeat( ${props => props.x} , 1fr);
      width: ${props => props.x * 20}px;
      height: ${props => props.y * 20}px;
      > div{
        background: white;
        border: solid 1px black;
      }
    `;

export default class PixelCanvas extends Component{
  constructor(props){
    super(props);
    this.state = {
      x: 32,
      y: 18
    }
  }

  renderGrid(){
    const grid = [];
    for(let i = 0; i < this.state.x * this.state.y; i++){
      grid.push(
        <div key={i} ></div>
      )
    }
    return grid;
  }

  render(){
    return(
      <StyledCanvasGrid x={this.state.x} y={this.state.y}>
        {this.renderGrid()}
      </StyledCanvasGrid>
    )
  }
}