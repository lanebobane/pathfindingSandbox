const {APPLE, DONUT, FLOUR} = require('./items.js')

class matrixNode {
  constructor(walkable, item){
    this.isWalkable = walkable,
    this.item = item
  }
}

const matrix1 = []

// 4x4 grid containing APPLE, DONUT and FLOUR.
const matrix2 = [
  [new matrixNode(true, false), new matrixNode(false, false), new matrixNode(true, false), new matrixNode(true, APPLE)],
  [new matrixNode(true, false), new matrixNode(false, false), new matrixNode(true, false), new matrixNode(true, false)],
  [new matrixNode(true, false), new matrixNode(false, false), new matrixNode(true, FLOUR), new matrixNode(true, false)],
  [new matrixNode(true, DONUT), new matrixNode(true, false), new matrixNode(true, false), new matrixNode(true, false)]
]

module.exports = {matrix1, matrix2}
