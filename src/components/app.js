import React, { Component } from 'react';
import styled from 'styled-components';

import Sidebar from './sidebar';
import WorkSpace from './work_space';
import Header from './header';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`

export default class App extends Component{
  render(){
    return (
      <StyledApp>
        <Header/>
        <Sidebar/>
        <WorkSpace/>
      </StyledApp>
    );
  }
}