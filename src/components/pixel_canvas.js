import React, { Component } from 'react';

export default class PixelCanvas extends Component {

  renderGrid(){
    const grid = [];
    for(let i = 1; i <= this.props.gridSize; i++){
      grid.push(
        <div key={i} className={"square square_" + i}>{i}</div>
      )
    }
    return grid;
  }

  render() {
    return (
      <div className="pixel-canvas">
        {this.renderGrid()}
      </div>
    );
  }
}