const PF = require('pathfinding');

let grid = new PF.Grid(5, 7);

var finder = new PF.AStarFinder();

var path = finder.findPath(0, 0, 4, 6, grid);

console.log(path)
