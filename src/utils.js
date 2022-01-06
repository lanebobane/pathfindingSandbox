const PF = require('pathfinding');

// build a matrix based on a layout. this matrix will be used to create a
// Pathfinding.js Grid class object, a necessary input for PF.Finder.findPath().
function makeMatrixFromLayout(layout){
  let grid = []
  for(let i=0; i < layout.length; i++){
    grid.push([])
    for(let j=0; j < layout[i].length; j++){
      if(layout[i][j].isWalkable){
        grid[i][j] = 0
      }
      else {
        grid[i][j] = 1
      }
    }
  }
  return grid
}

// gets all items in the layout and returns a list formatted for createPath()
// to use.
function makeItemList(layout, list){
  let itemList = []
  let itemsRemaining = list.length

  for(let i=0; i < layout.length; i++){
    for(let j=0; j < layout[i].length; j++){
      if(list.includes(layout[i][j].item)){
        let item = {
          item: layout[i][j].item,
          x: i,
          y: j
        }
        itemList.push(item);
        itemsRemaining -= 1;
      }
    }
  }
  if(itemsRemaining === 0){
    return itemList
  }
  else {
    return false
  }
}

// creates a route using the A* pathfinding algorithm.
// TODO: need to expand functionality so that entire item list is considered, not just
// index 0 and index 1.
function createPath(layout, listOfItemStrings){

  const itemList = makeItemList(layout, listOfItemStrings)
  const matrix = makeMatrixFromLayout(layout)
  // Don't try to do anything if the inputs are false.
  if(matrix === false || itemList === false){
    return false
  }
  // Otherwise the inputs are valid and we can find a path (if one exists and isn't
  // blocked by obstacles).
  let finder = new PF.AStarFinder();
  let grid = new PF.Grid(matrix)
  let path = finder.findPath(
    itemList[0].x,
    itemList[0].y,
    itemList[1].x,
    itemList[1].y,
    grid
  )
  console.log('Origin: ', itemList[0].item)
  console.log('Destination: ', itemList[1].item)
  return path
}


module.exports = {makeMatrixFromLayout, makeItemList, createPath}
