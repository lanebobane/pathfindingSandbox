const PF = require('pathfinding');

var matrix = [
  [0, 0, 1, 1],
  [1, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
];

var gridMatrix = new PF.Grid(matrix);
let grid = new PF.Grid(4, 4);

var finder = new PF.AStarFinder();

var path = finder.findPath(0, 0, 3, 3, grid);
var pathMatrix = finder.findPath(0, 0, 3, 3, gridMatrix);

console.log('no obstacles')
console.log(path)
console.log('obstacles')
console.log(matrix)
console.log("***")
console.log(pathMatrix)
