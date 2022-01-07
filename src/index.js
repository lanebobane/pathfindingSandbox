const { layout1 } = require('./layouts.js')
const { createPath } = require('./utils.js')
const {APPLE, DONUT, FLOUR, UNICORN} = require('./items.js')

const fullList = [APPLE, DONUT, FLOUR]
const partialList = [APPLE, DONUT]
const oneList = [APPLE]
const emptyList = []
const invalidList = [UNICORN]

console.log("Origin is (0,0) for all cases.")

console.log("Path for ", fullList)
const path1 = createPath(layout1, fullList)
console.log(path1)

console.log("Path for ", partialList)
const path2 = createPath(layout1, partialList)
console.log(path2)

console.log("Path for ", oneList)
const path3 = createPath(layout1, oneList)
console.log(path3)

console.log("Path for ", emptyList)
const path4 = createPath(layout1, emptyList)
console.log(path4)

console.log("Path for ", invalidList)
const path5 = createPath(layout1, invalidList)
console.log(path5)
