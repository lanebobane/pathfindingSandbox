const PF = require('pathfinding');
const { layout1, layout2 } = require('./layouts.js')
const { makeMatrixFromLayout, makeItemList, createPath } = require('./utils.js')
const {APPLE, DONUT, FLOUR} = require('./items.js')

console.log("Layout 1, contains correct items:")
console.log("Matrix:")
const matrix = makeMatrixFromLayout(layout1)
console.log(matrix)

console.log("List:")
const list = [APPLE, DONUT]
const itemList = makeItemList(layout1, list)
console.log(itemList)

console.log("Path:")
const path = createPath(matrix, itemList)
console.log(path)


console.log("Layout 2, contains no items:")
console.log("Matrix:")
const matrix2 = makeMatrixFromLayout(layout2)
console.log(matrix2)

console.log("List:")
const itemList2 = makeItemList(layout2, list)
console.log(itemList2)

console.log("Path:")
const path2 = createPath(matrix2, itemList2)
console.log(path2)

