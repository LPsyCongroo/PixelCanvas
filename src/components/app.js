import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Sidebar from './sidebar';
import WorkSpace from './work_space';
import Header from './header';

import { mouseMove } from '../actions';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`

class App extends Component{
  constructor(props){
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e){
    this.props.mouseMove(e.clientX, e.clientY);
  }

  render(){
    // console.log(Object.entries(this.props.mouse).toString());
    return (
      <StyledApp onMouseMove={this.handleMouseMove} >
        <Header/>
        <Sidebar/>
        <WorkSpace/>
      </StyledApp>
    );
  }
}

function mapStateToProps(state){
  return {
    mouse: state.userInput.mouse
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ mouseMove: mouseMove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);