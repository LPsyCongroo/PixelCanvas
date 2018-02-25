import React, { Component } from 'react';
import styled from 'styled-components';

import Sidebar from './sidebar';
import WorkSpace from './work_space';

const StyledApp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`

export default class App extends Component{
  constructor(props){
    super(props);
    
  }
  render(){
    return (
      <StyledApp>
        <Sidebar/>
        <WorkSpace/>
      </StyledApp>
    );
  }
}