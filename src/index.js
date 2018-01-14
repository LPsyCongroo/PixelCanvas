import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

/**
 * Some features for consideration:
 * 
 * Color picker tool
 * Save colors used in picture already
 * 
 * Save and export html and css data
 * 
 * Create animations by saving frames
 * 
 * Create onRender animations (for example, cycle through all colors used)
 * 
 * These will probably require Redux data
 */
