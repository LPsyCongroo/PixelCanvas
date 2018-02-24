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
      canvas: this.buildCanvas(gridMin),
      wasPainted: false,
      color: "rgba(0,0,0,1)",
      palette: []
    }

    this.setGridSize = this.setGridSize.bind(this);
    this.paintPixel = this.paintPixel.bind(this);
    this.selectColor = this.selectColor.bind(this);
    
  }

  /**
   * Return a new array representing a canvas
   * 
   * @param {number} gridSize 
   */
  buildCanvas(gridSize){
    const canvas = [];
    for(let i = 0; i < Math.pow(gridSize, 2); i++){
      canvas.push("rgba(0,0,0,0)");
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
      canvas: this.buildCanvas(newGridSize),
      wasPainted: false
    });
  }

  updatePalette() {
    const palette = [];
    
    this.state.canvas.forEach(color => {
      if(palette.indexOf(color) === -1)
        palette.push(color);
    });

    this.setState({ palette })
  }

  /**
   * Callback to set state for canvas.
   * Sets wasPainted to true. 
   * 
   * Calls the update palette function after setting state.
   * 
   * @param {number} key - key prop
   */
  paintPixel(key){
    this.setState(prevState => {
      // Paint the canvas
      const color = this.state.color;
      const newCanvas = [...prevState.canvas];
      newCanvas[key] = color;

      return { 
        canvas: newCanvas,
        wasPainted: true ,
      }
    }, this.updatePalette);
  }
 
  // Convert color object to CSS and set state
  selectColor(color){
    const {r,g,b,a} = color.rgb;    
    this.setState({ color: `rgba(${r},${g},${b},${a})` })
  }

  render() {
    return (
      <div className="app">
        <Toolbar 
          // Handlers
          setGridSize={this.setGridSize} 
          selectColor={this.selectColor}
          
          // State passed as props
          gridSize={this.state.gridSize}
          color={this.state.color}
          palette={this.state.palette}       
        />
        <PixelCanvas gridSize={this.state.gridSize} paintPixel={this.paintPixel} canvas={this.state.canvas}/>
      </div>
    );
  }
}

export default App;
