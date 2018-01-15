import React, { Component } from 'react';

export default class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <h1>Pixel Canvas</h1>
        <div className="widgets">
          <label>
            Grid Size: <input 
                        type="number"
                        value={this.props.gridSize}
                        onChange={ e => this.props.setGridSize(e.target.value) }
                        />
          </label>
        </div>
      </div>
    );
  }
}