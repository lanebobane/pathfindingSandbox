const PF = require('pathfinding');
const { matrix1, matrix2 } = require('./grid.js')
const { makeGridFromMatrix, makeItemList, createPath } = require('./utils.js')
const {APPLE, DONUT, FLOUR} = require('./items.js')

console.log("Grid:")
const grid = makeGridFromMatrix(matrix2)
console.log(grid)

console.log("List:")
const list = [APPLE, DONUT]
const itemList = makeItemList(matrix2)
console.log(itemList)

console.log("Path:")
const path = createPath(grid, itemList)
console.log(path)

