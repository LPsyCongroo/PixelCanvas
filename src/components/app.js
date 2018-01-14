import React, { Component } from 'react';
import Toolbar from './toolbar';
import PixelCanvas from './pixel_canvas';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gridSize: 3
    }
    this.setGridSize = this.setGridSize.bind(this);
  }

  // A callback to set the size of the pixel canvas grid
  setGridSize(newGridSize) {
    if(newGridSize < 3)
      this.setState({ gridSize: 3 });
    else if(newGridSize > 128)
      this.setState({ gridSize: 128 });
    else
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
