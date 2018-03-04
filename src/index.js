import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './css/index.css'

import App from './components/app';
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const preloadedState = {
  sidebar:{

  },
  userInput: {
    mouse: {

    }
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )}>
    <App/>
  </Provider>
, document.getElementById('root'));