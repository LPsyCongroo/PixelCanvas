import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../assets/color';
import {StyledInput} from './generic_styled_components';

export default class ZoomWidget extends Component{
  render(){
    return (
      <StyledInput value="100%" title="Zoom" zoom />
    )
  }
}