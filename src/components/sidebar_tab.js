import React, { Component } from 'react';
import styled from 'styled-components';

import {StyledToolbar} from './generic_styled_components';
import { Edit, Animate } from '../assets/icons';

export default class SidebarTab extends Component {
  render(){
    return (
      <StyledToolbar>
        <Edit tab active={this.props.mode === "EDIT"} onClick={()=>this.props.setMode("EDIT")} />
        <Animate tab active={this.props.mode ==="ANIMATE"} onClick={()=>this.props.setMode("ANIMATE")} />
      </StyledToolbar>
    )
  }
}