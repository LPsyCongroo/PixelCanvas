import React, { Component } from 'react';
import Toolbar from './toolbar';
import PixelCanvas from './pixel_canvas';

const gridMin = 3;
const gridMax = 32;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gridSize: 0,
      currentCanvas: [],
      canvasWasPainted: false
    }
    this.setGridSize = this.setGridSize.bind(this);
  }

  /**
   * A callback to set state related to canvas size 
   * 
   * @param {number} value - New grid size. Should be an integer.
   * 
   */
  setGridSize(value) {
    // Let you know if you're about to erase your work.
    if(this.state.canvasWasPainted 
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
    const newCanvas = [];
    
    for(let i = 0; i < newGridSize; i++){
      newCanvas.push("rgba(255,255,255)");
    }

    this.setState({ 
      gridSize: newGridSize,
      currentCanvas: newCanvas
    });
  }



  // Set initial state
  componentWillMount() {
    this.setGridSize(gridMin);
  }

  render() {
    return (
      <div className="app">
        <Toolbar setGridSize={this.setGridSize} gridSize={this.state.gridSize}/>
        <PixelCanvas gridSize={this.state.gridSize}/>
      </div>
    );
  }
}

export default App;
