import { combineReducers } from 'redux';
import sidebarReducer from './sidebar_reducer';
import userInputReducer from './user_input_reducer';

export default combineReducers({
  sidebar: sidebarReducer,
  userInput: userInputReducer
});