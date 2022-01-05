const PF = require('pathfinding');
const { layout1 } = require('./layouts.js')
const { makeMatrixFromLayout, makeItemList, createPath } = require('./utils.js')
const {APPLE, DONUT, FLOUR} = require('./items.js')

console.log("Matrix:")
const matrix = makeMatrixFromLayout(layout1)
console.log(matrix)

console.log("List:")
const list = [APPLE, DONUT]
const itemList = makeItemList(layout1)
console.log(itemList)

console.log("Path:")
const path = createPath(matrix, itemList)
console.log(path)

