import React, { Component } from 'react';
import styled from 'styled-components';

import {StyledToolbar} from './generic_styled_components';
import { Brush, Fill, Eraser, Select, ColorPicker,
         Loop, Prev, Play, Pause, Next, FullScreen } from '../assets/icons';

export default class SidebarToolbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false
    }
    this.togglePlay = this.togglePlay.bind(this);
  }
  
  togglePlay(){
    this.setState((prevState)=>({isPlaying: !prevState.isPlaying}));
  }

  render(){
    switch(this.props.mode){
      case "EDIT":
        return (
          <StyledToolbar>
            <Brush tool active/>
            <Fill tool />
            <Eraser tool />
            <Select tool />
            <ColorPicker tool />
          </StyledToolbar>
        );
      case "ANIMATE":
        let PlayPause = this.state.isPlaying 
                        ? <Pause click onClick={this.togglePlay}/> 
                        : <Play click onClick={this.togglePlay}/>
        return (
          <StyledToolbar>
            <Loop toggle />
            <Prev click />
            {PlayPause}
            <Next click />
            <FullScreen click />
          </StyledToolbar>
        );
      default:
        return (
          <StyledToolbar>
            Error with props
          </StyledToolbar>
        )
    }
  }
}
