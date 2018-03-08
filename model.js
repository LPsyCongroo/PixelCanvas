// Model

const State = {
  file: {
    name: 'untitled',
    dateCreated: '',
    lastUpdated: '',
    type: '16x9', // 9x16, square    
    data: {
      xDimensions: 32, // Number of pixels, so it can be multiples of 16
      yDimensions: 18,   
      timeline: [ //maybe a linked list would be a good idea...
        {
          type: 'FRAME',
          canvas: [pixel], // each pixel is a color object has HEX, HSL, and RGB + alpha values
          frameTime: 1000, // ms
          transitionType: 'Auto/Click, Auto/NoClick, Click',
          thumbnail: 'url',
          next: {},
          prev: {}    
        },
        {
          type: 'TRANSITION',
          animation: 'color cycle', // blend, color cycle, random color, random positions, side scroller
          animationTime: 500, // ms
          next: {},
          prev: {}  
        }
      ],
      currentFrame: 0,
      loop: false
    }
  },
  editor: {
    currentTool: 'brush', // brush, fill, dropper, rect, eraser, select, drag select
    currentMode: 'edit', // edit, playback, modal menu
    zoom: 100,
    onionSkin: {
      on: false,
      frame: 0,
      opacity: 0.5,
      below: true // is the onion skin layer above or below the canvas
    },
    preferences: {
      shortcuts: {
        brush: 'b',
        fill: 'f',
        dropper: 'i',
        eraser: 'e',
        zoomIn: '+',
        zoomOut: '-',
        previousFrame: 'page up',
        nextFrame: 'page down'
      }
    }
  },
  userInput: {
    mouseCoordinates: {
      x: 0,
      y: 0
    },
    mouseMode: 'paint', // cursor
    scroll: {
      yOffset: 0,
      xOffset: 0
    },
    shiftDown: false,
    controlDown: false
  }
}