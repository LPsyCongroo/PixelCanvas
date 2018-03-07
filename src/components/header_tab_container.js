import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../assets/color';
import Tab from './header_tab';
import { StyledInput } from './generic_styled_components';

// Dummy state
const openFiles = ["file1", "file2", "djskfsdjkfhkjsdfjk"];

// styled component
const TContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 2.625rem;
  background: ${color.grey1};
  border-right: solid 0.375rem ${color.black};
`;

export default class TabContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: openFiles[0]
    }
  }

  // Render a list of open tabs with dummy state.
  renderTabs(){
    return openFiles.map((file) => {
      return (
        <Tab 
          key={file} 
          active={this.state.activeTab === file}
          onClick={()=>this.setState({activeTab: file})}
        >
          <StyledInput 
            type="text" 
            value={file}
            disabled={this.state.activeTab !== file}
          />
          <span>32x9</span>
        </Tab>
      )
    })
  }
  render(){
    return (
      <TContainer>
        {this.renderTabs()}
      </TContainer>
    )
  }
}