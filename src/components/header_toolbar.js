import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../assets/color';
import {Grid, Onion, Chevron} from '../assets/icons';
import UserWidget from './header_user_widget';
import ZoomWidget from './header_zoom_widget';

export default class HeaderToolbar extends Component{
  render(){
    return (
      <div>
        <Grid/>
        <Onion/>
        <ZoomWidget/>
        <UserWidget/>
      </div>
    )
  }
}