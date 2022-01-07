const PF = require('pathfinding');

// build a matrix based on a layout. this matrix will be used to create a
// Pathfinding.js Grid class object, a necessary input for PF.Finder.findPath().
function makeMatrixFromLayout(layout){
  let matrix = []
  for(let i=0; i < layout.length; i++){
    matrix.push([])
    for(let j=0; j < layout[i].length; j++){
      if(layout[i][j].isWalkable){
        matrix[i][j] = 0
      }
      else {
        matrix[i][j] = 1
      }
    }
  }
  return matrix
}

// searches the layout for all items on the user-provided list. if not all items are present, returns
// false. If all items are present, returns a list with details about the items' locations.
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

// takes a user-specified layout and list of items. Utilizes Pathfinding.js to find A to B paths for
// each segment on the list, then formats those subpaths into a master path, which is returned.
function createPath(layout, listOfItemStrings){

  const itemList = makeItemList(layout, listOfItemStrings)
  const matrix = makeMatrixFromLayout(layout)

  // Don't try to do anything if the inputs are false.
  if(matrix === false || itemList === false){
    return false
  }

  // Otherwise the inputs are valid and we can find a path (if one exists and isn't
  // blocked by obstacles).
  let finalPath = ['origin']

  for(let i=0; i<itemList.length; i++){

    // Need to set up a new one of these for each subroute, otherwise (among possible)
    // other things, the updated origin will not be respected.
    let finder = new PF.AStarFinder();
    let grid = new PF.Grid(matrix)

    const originX = (itemList[i-1] ? itemList[i-1].x: 0);
    const originY = (itemList[i-1] ? itemList[i-1].y: 0);
    const destinationX = itemList[i].x;
    const destinationY = itemList[i].y;

    let newPath = finder.findPath(
      originX,
      originY,
      destinationX,
      destinationY,
      grid
    )

    newPath.forEach(coordinate => {
      finalPath.push(coordinate)
    })

    finalPath.push(itemList[i].item)
  }

  return finalPath

}


module.exports = {makeMatrixFromLayout, makeItemList, createPath}
