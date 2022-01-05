const PF = require('pathfinding');

//build the grid that will be fed into the pathfinding algo (line 16 in helloWorld).
function makeMatrixFromLayout(matrix){
  let grid = []
  for(let i=0; i < matrix.length; i++){
    grid.push([])
    for(let j=0; j < matrix[i].length; j++){
      if(matrix[i][j].isWalkable){
        grid[i][j] = 0
      }
      else {
        grid[i][j] = 1
      }
    }
  }
  return grid
}

// gets all items in the grid and returns a list formatted for Pathfinding.js
// to use.
// TODO: change this to take an item list and return false if not all items are found. Will also need to change docs to reflect this not returning the missing items (bc doing so its really critical).
function makeItemList(matrix){
  let itemList = []
  for(let i=0; i < matrix.length; i++){
    for(let j=0; j < matrix[i].length; j++){
      if(matrix[i][j].item){
        let item = {
          item: matrix[i][j].item,
          x: i,
          y: j
        }
        itemList.push(item)
      }
    }
  }
  return itemList
}

// creates a route using the A* pathfinding algorithm.
// TODO: refactor so it takes a layout instead of a matrix and then calls
// makeMatrixfromLayout within this function.
// TODO: refactor to take a list of items (strings) instead of an itemList.
// TODO: need to expand functionality so that entire item list is considered, not just
// index 0 and index 1.
function createPath(matrix, itemList){
  let finder = new PF.AStarFinder();
  let grid = new PF.Grid(matrix)
  let path = finder.findPath(
    itemList[0].x,
    itemList[0].y,
    itemList[1].x,
    itemList[1].y,
    grid
  )
  return path
}


module.exports = {makeMatrixFromLayout, makeItemList, createPath}
