import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

export default class Toolbar extends Component {

  render() {
    return (
      <div className="toolbar">
        <h1>Pixel Canvas</h1>
        <div className="widgets">
          <div className="widget-grid-size">
            <label htmlFor="grid-size">
              Grid Size: {this.props.gridSize}x{this.props.gridSize}
            </label>
            <input
              id="grid-size"
              type="range"
              min={3}
              max={32}
              value={this.props.gridSize}
              onChange={ e => this.props.setGridSize(e.target.value) }
              />
          </div>
          <div className="widget-color-picker">
            <ChromePicker color={this.props.color} onChangeComplete={this.props.selectColor}/>          
          </div>
        </div>
      </div>
    );
  }
}