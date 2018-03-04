export const types =  {
  RESIZE_SIDEBAR: 'RESIZE_SIDEBAR',
  GRAB_SIDEBAR: 'GRAB_SIDEBAR',
  MOUSE_MOVE: 'MOUSE_MOVE'
}

export function resizeSidebar(width){
  return {
    type: types.RESIZE_SIDEBAR,
    payload: width
  }
}

export function mouseMove(x, y){
  return {
    type: types.MOUSE_MOVE,
    payload: {x, y}
  }
}