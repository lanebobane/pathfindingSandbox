const PF = require('pathfinding');
const { layout1, layout2 } = require('./layouts.js')
const { makeMatrixFromLayout, makeItemList, createPath } = require('./utils.js')
const {APPLE, DONUT, FLOUR} = require('./items.js')

console.log("List:")
const fullList = [APPLE, DONUT, FLOUR]
const partialList = [APPLE, DONUT]
const oneList = [APPLE]

console.log("Layout 1, contains correct items:")

console.log("Path FullList: ")
const path1 = createPath(layout1, fullList)
console.log(path1)

console.log("Path PartialList:")
const path2 = createPath(layout1, partialList)
console.log(path2)

// console.log("Path:")
// const path3 = createPath(layout1, oneList)
// console.log(path3)


console.log("Layout 2, contains zero items:")

console.log("Path:")
const path4 = createPath(layout2, fullList)
console.log(path4)

console.log("Path:")
const path5 = createPath(layout2, partialList)
console.log(path5)

// console.log("Path:")
// const path6 = createPath(layout2, oneList)
// console.log(path6)

