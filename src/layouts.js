const {APPLE, DONUT, FLOUR} = require('./items.js')

class layoutNode {
  constructor(walkable, item){
    this.isWalkable = walkable,
    this.item = item
  }
}

// 4x4 grid containing APPLE, DONUT and FLOUR.
const layout1 = [
  [new layoutNode(true, false), new layoutNode(false, false), new layoutNode(true, false), new layoutNode(true, APPLE)],
  [new layoutNode(true, false), new layoutNode(false, false), new layoutNode(true, false), new layoutNode(true, false)],
  [new layoutNode(true, false), new layoutNode(false, false), new layoutNode(true, FLOUR), new layoutNode(true, false)],
  [new layoutNode(true, DONUT), new layoutNode(true, false), new layoutNode(true, false), new layoutNode(true, false)]
]

module.exports = {layout1}
