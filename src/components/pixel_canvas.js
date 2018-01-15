import React, { Component } from 'react';

export default class PixelCanvas extends Component {

  renderGrid(){
    const grid = [];
    for(let i = 1; i <= Math.pow(this.props.gridSize, 2); i++){
      grid.push(
        <div key={i} className={"square"}></div>
      )
    }
    return grid;
  }

  render() {
    // Render a dynamic grid
    const gridStyle = {
      gridTemplateColumns: `repeat(${ this.props.gridSize }, 1fr)`,
      gridTemplateRows: `repeat(${ this.props.gridSize }, 1fr)`
    }
    return (
      <div className="pixel-canvas" style={gridStyle}>
        {this.renderGrid()}
      </div>
    );
  }
}