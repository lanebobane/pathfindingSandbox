const PF = require('pathfinding');

//build the grid that will be fed into the pathfinding algo (line 16 in helloWorld).
function makeGridFromMatrix(matrix){
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
function createPath(_grid, itemList){
  let finder = new PF.AStarFinder();
  let grid = new PF.Grid(_grid)
  console.log(itemList[0].x)
  console.log(itemList[0].y)
  console.log(itemList[1].x)
  console.log(itemList[1].y)
  let path = finder.findPath(
    itemList[0].x,
    itemList[0].y,
    itemList[1].x,
    itemList[1].y,
    grid
  )
  return path
}


module.exports = {makeGridFromMatrix, makeItemList, createPath}
