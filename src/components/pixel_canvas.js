import React, { Component } from 'react';

export default class PixelCanvas extends Component {

  // Render all the Pixels in the grid
  renderGrid(){
    const grid = [];
    for(let i = 0; i < Math.pow(this.props.gridSize, 2); i++){
      grid.push(
        <div key={i} className={"square"} ></div>
      )
    }
    return grid;
  }

  render() {
    // Update the CSS-Grid properties by passing dynamic inline styles
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