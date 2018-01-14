import React, { Component } from 'react';
import Toolbar from './toolbar';
import PixelCanvas from './pixel_canvas';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gridSize: 1
    }
    this.setGridSize = this.setGridSize.bind(this);
  }

  // A callback to set the size of the pixel canvas grid
  setGridSize(newGridSize) {
    this.setState({ gridSize: newGridSize});
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
