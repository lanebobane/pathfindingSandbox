const PF = require('pathfinding');
const { grid1, grid2 } = require('./grid.js')

// A quick demo of Pathfinding.js's functionality.
function helloWorld() {

  // 0's are walkable cells, 1's are obstacles.
  var matrix = [
    [0, 0, 1, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
  ];

  // You can create Grid objects in two ways.
  var gridMatrix = new PF.Grid(matrix);
  let grid = new PF.Grid(4, 4);

  // Finders use a specific pathfinding algorithm.
  var finder = new PF.AStarFinder();

  // Finders can be used on different Grids.
  var path = finder.findPath(0, 0, 3, 3, grid);
  var pathMatrix = finder.findPath(0, 0, 3, 3, gridMatrix);

  console.log('Path using Grid with no obstacles')
  console.log(path)
  console.log("*******")
  console.log('Path using Grid containing obstacles')
  console.log(pathMatrix)
}

console.log(grid1)
console.log(grid2)
