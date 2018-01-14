import React, { Component } from 'react';

export default class Toolbar extends Component {
  
  render() {
    return (
      <div className="toolbar">
        <input type="number" value={this.props.gridSize} min="1" onChange={(e)=>this.props.setGridSize(e.target.value)}/>
      </div>
    );
  }
}