import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class WorkSpace extends Component{
  constructor(props){
    super(props);

    this.draw = this.draw.bind(this);
    this.resizeCanvas = this.resizeCanvas.bind(this);
  }

  draw(){
    const ctx = this.canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(500,0,60,60);
  }

  resizeCanvas(){
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 72;
  }

  componentDidMount(){
    this.canvas.style.background = "#999";
    this.resizeCanvas();
    this.draw();
  }
  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
      <canvas ref={canvas => this.canvas = canvas} />
    );
  }
}

function mapStateToProps(state){
  return {}
}

export default connect(mapStateToProps)(WorkSpace);