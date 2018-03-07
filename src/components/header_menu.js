import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import color from '../assets/color';

// Styled Components
const MenuUl = styled.ul`
  display: flex;
  justify-content: left;
  height: 1.5rem;
  font-size: 0.875rem;
`;
const MenuLi = styled.li`
  position: relative;
  padding: 0 0.6rem;
  list-style: none;
  line-height: 1.5rem;
  cursor: default;
  &:hover{
    background: ${color.yellow};
    color: ${color.black};
  }

  &:hover > ul {
    display: block;
  }

  ${props => props.dropDown && css`
    display: flex;
    justify-content: space-between;
    color: ${color.black};
    padding: 0 1.2rem;
    &:hover {
      background: ${color.grey1};
      color: ${color.white};
    }
  `}
`;
const DropDownUl = styled.ul`
  display: none;
  position: absolute;
  top: 1.5rem;
  left: 0;
  z-index: 10;
  background: ${color.yellow};
  width: 15rem;
  box-shadow: 2px 4px 4px rgba(0,0,0,0.25);
`;

const ShortCut = styled.div`
  opacity: 0.7;
  text-align: right;  
`;

// Dummy state to be populated later, including a prop for an onClick action dispatch.
// It will be updated if user shortcut preferences are updated.
const menu = {
  File:[
    { label: "New File", shortcut: "Ctrl + N" },
    { label: "Open File", shortcut: "Ctrl + O" },
    { label: "Save", shortcut: "Ctrl + S" },
    { label: "Export...", shortcut: "Ctrl + E" },
    { label: "Log In/Log Out", shortcut: "" },
  ],
  Edit:[
    { label: "Undo", shortcut: "Ctrl+Z" },
    { label: "Redo", shortcut: "Ctrl+Shift+Z" },
    { label: "Settings", shortcut: "" },
  ],
  View:[
    { label: "Show Grid", shortcut: "G" },
    { label: "Zoom In", shortcut: "+" },
    { label: "Zoom Out", shortcut: "-" },
    { label: "Zoom to 100%", shortcut: "0" },
    { label: "Pan", shortcut: "P" },
    { label: "Next Frame", shortcut: "pg dn" },
    { label: "Previous Frame", shortcut: "pg up" },
    { label: "Toggle Onion Skin", shortcut: "O" },    
  ],
  Draw:[
    { label: "Brush", shortcut: "B" },
    { label: "Adjust Brush Size", shortcut: "Shift+Scroll" },
    { label: "Eraser", shortcut: "E" },
    { label: "Fill", shortcut: "F" },
    { label: "Color Picker", shortcut: "I" },
    { label: "Tonal Correction", shortcut: "" },
    { label: "Clear Canvas...", shortcut: "" },
    
  ],
  Animate:[
    { label: "New Frame", shortcut: "Ctrl+F" },
    { label: "New Transition Frame", shortcut: "Ctrl+T" },
    { label: "Delete Current Frame...", shortcut: "" },    
  ],
  Help: [
    { label: "Docs"},
    { label: "Github"},    
  ]
}

// React Component
export default class Menu extends Component{
// Dynamically create all the menu navigation elements
  renderMenu(){
    // The menu is an array of menu components with hidden drop downs
    const RenderedMenu = [];

    for(let menuComponent in menu){
      // In turn, each menu component is an array of drop-down components
      const dropDownList = menu[menuComponent].map(dropDownComponent => {
        // Not all drop-down components will have a shortcut
        const shortcut = dropDownComponent.shortcut ? <ShortCut>{dropDownComponent.shortcut}</ShortCut> : null;

        return (
          <MenuLi 
            key={dropDownComponent.label} 
            dropDown 
            onClick={() => console.log(dropDownComponent.label + ' was clicked!')
          }>
            <div>{dropDownComponent.label}</div>
            {shortcut}
          </MenuLi>
        );
      });

      RenderedMenu.push(
        <MenuLi key={menuComponent}>
          {menuComponent}
          <DropDownUl>
            {dropDownList}
          </DropDownUl>
        </MenuLi>
      )
    };
    return RenderedMenu;
  }
  
  render(){
    return (
      <MenuUl>
        {this.renderMenu()}
      </MenuUl>
    );
  }
}