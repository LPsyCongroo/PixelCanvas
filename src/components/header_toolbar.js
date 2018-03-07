import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../assets/color';
import {Grid, Onion, Chevron} from '../assets/icons';
import UserWidget from './header_user_widget';
import ZoomWidget from './header_zoom_widget';

const HTContainer = styled.div`
  display: flex;
  min-width: 14.5rem;
`;

export default class HeaderToolbar extends Component{
  render(){
    return (
      <HTContainer>
        <Grid toggle />
        <Onion toggle active/>
        <ZoomWidget/>
        <UserWidget/>
      </HTContainer>
    )
  }
}