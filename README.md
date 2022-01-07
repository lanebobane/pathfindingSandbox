PathfindingSandbox.js
==============

Project Description
------------

The aim of this project is to explore the [Pathfinding.js](https://qiao.github.io/PathFinding.js/visual/) library and extend the functionality to allow the user to obtain a path to collect a list of items.

User Stories
------
1. As a thing-fetcher, I can provide a list of things and will be given an optimal path to follow to
 retrieve them assuming a fixed search area.
2. If the search area does not contain all items on my list, I am told which items are not present.

`Pathfinding.js` & `PathfindingSandbox.js`
------
`Pathfinding.js` is a library created by [Xueqiao Xu](https://github.com/qiao) and [other authors](https://github.com/qiao/PathFinding.js/blob/master/docs/contributor-guide/authors.md) that aims to provide a simple Javascript library for 2D pathfinding. It provides options for multiple pathfinding algorithms and allows the user to easily create a "matrix" of walkable and unwalkable cells.

`PathfindingSandbox.js` builds on top of `Pathfinding.js` by allowing the user draw "layouts" in the `layouts.js` file and place items within the matrix, while also still being able to set each cell as walkable or not.

The other utility functions then allow the user to use these layouts to provide `Pathfinding.js` with the inputs it needs to find a path.

First, `PathfindingSandbox.js` can extract a matrix from a layout, one of the necessary inputs for `Pathfinding.js`.

Second, `PathfindingSandbox.js` can handle multi-item lists (i.e. A->B->C->D...) whereas `Pathfinding.js` can only handle a single origin and destination (i.e. A->B).

Functional Details
------
For the simplicity of this project, the items the user will search for will be limited to the following:
apple, donut and flour.

The path will be based on go through the items in the order the user provides them. So "apple, donut, flour" will yield a different path than "apple, flour, donut".

User will provide a list of items in the form of:
```['apple', 'donut', 'flour']```
or similarly built using constants.

User will receive a path in the form of:
```[[0,0], [0,1], 'apple', [0,2], [0,3], 'donut', [1,3], [2,3], [3,3], 'flour']```

...where apple is located at (0,1), donut is located at (0,3), and flour is located at (3,3), all within
a 4x4 grid with zero obstacles.

Implementation Details
------
Each search area will be represented as an array of arrays (2D) with each element in the sub-array being
an object.

**Note:** Navigation coordinates provided by Pathfinding.js follow the [x, y] format, but are
implemented as an array of arrays (2D). This means that when we say grid coordinate (1,2), this will
in fact be Grid[2][1].

`Layouts.js` holds the layout of each search area. Each element in a Layout contains a `layoutNode` class item, which contains the following data:
* isWalkable: Boolean. Denotes whether the element can be walked over/travered or not.
* item: contains a string-value that represents if an object is present at that location, and `false` if
no item is present.

**Note**: An unwalkable element cannot have an item in it, but a walkable element need not have an item
in it.

Example layoutNode objects:
```{isWalkable: false, item: 0}```,
```{isWalkable: true, item: "apple"}```,
```{isWalkable: true, item: 0}```

When a user provides a list of items, `PathfindingSandbox.js` first determines if the Layout contains
all items on the list. If all items are found, an item-list is created with the items and their coordinates. Else if not all items are found, the program will respond with a message saying so.

A matrix is also built based on the Layout, and a Grid (`Pathfinding.js` Class object) is created with the matrix as an input.

`Pathfinding.js` will attempt to find a path using the created Grid and the Item List. If no path is available, an empty list will be returned.

Example Data Things
------
layoutNode Class:
```{isWalkable: false, item: 0}```,
```{isWalkable: true, item: "apple"}```,
```{isWalkable: true, item: 0}```

Layout
```[[new layoutNode(true, false), new layoutNode(false, false), new layoutNode(true, false), new layoutNode(true, APPLE)],[new layoutNode(true, false), new layoutNode(false, false), new layoutNode(true, false), new layoutNode(true, false)],[new layoutNode(true, false), new layoutNode(false, false), new layoutNode(true, FLOUR), new layoutNode(true, false)],[new layoutNode(true, DONUT), new layoutNode(true, false), new layoutNode(true, false), new layoutNode(true, false)]]```


Demo
------

An [online demo](https://youtu.be/o0iMGFq-8Hc) can be found to showcase the functionality of this project.
