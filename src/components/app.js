import React, { Component } from 'react';
import Toolbar from './toolbar';
import PixelCanvas from './pixel_canvas';

const gridMin = 3;
const gridMax = 32;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gridSize: gridMin,
      currentCanvas: this.buildCanvas(gridMin),
      wasPainted: false,
      color: "rgba(0,0,0,1)"
    }

    this.setGridSize = this.setGridSize.bind(this);
    this.paintPixel = this.paintPixel.bind(this);
  }

  /**
   * Return a new array representing a canvas
   * 
   * @param {number} gridSize 
   */
  buildCanvas(gridSize){
    const canvas = [];
    for(let i = 0; i < Math.pow(gridSize, 2); i++){
      canvas.push("rgba(255,255,255,0)");
    }
    return canvas;
  }

  /**
   * A callback to set state related to canvas size 
   * 
   * @param {number} value - New grid size. Should be an integer.
   * 
   */
  setGridSize(value) {
    // Let you know if you're about to erase your work.
    if(this.state.wasPainted 
      && !window.confirm("Changing the canvas size now will make you lose your work!  Are you sure?")
    )return;

    // Validates that the new grid size falls within established limits
    function validateNGS() {
      value = Math.floor(value);      
      if(value < gridMin)
        return gridMin;
      else if(value > gridMax)
        return gridMax;
      else
        return value;
    }
    
    const newGridSize = validateNGS();

    this.setState({ 
      gridSize: newGridSize,
      currentCanvas: this.buildCanvas(newGridSize),
      wasPainted: false
    });
  }

  /**
   * Callback to set state for currentCanvas.
   * Sets wasPainted to true. 
   * 
   * @param {number} key - key prop
   */
  paintPixel(key){
    this.setState(prevState => {
      const newCanvas = [...prevState.currentCanvas];
      newCanvas[key] = this.state.color;

      return { currentCanvas: newCanvas, wasPainted: true };
    });
  }

  render() {
    return (
      <div className="app">
        <Toolbar setGridSize={this.setGridSize} gridSize={this.state.gridSize}/>
        <PixelCanvas gridSize={this.state.gridSize} paintPixel={this.paintPixel} canvas={this.state.currentCanvas}/>
      </div>
    );
  }
}

export default App;
