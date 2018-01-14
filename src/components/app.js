import React, { Component } from 'react';
import Toolbar from './toolbar';
import PixelCanvas from './pixel_canvas';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gridSize: 1
    }
  }
  render() {
    return (
      <div className="app">
        <Toolbar/>
        <PixelCanvas/>
      </div>
    );
  }
}

export default App;
