PathfindingSandbox.js
==============
#### A first look into Pathfinding.js, library I may use for my Capstone Project ####

Project Description
------------

The aim of this project is to satisfy simple user-stories having to do with determining the shortest
path to fetch a list of items.

User Stories
------
1. As a thing-fetcher, I can provide a list of things and will be given an optimal path to follow to
 retrieve them assuming a fixed search area.
2. If the search area does not contain all items on my list, I am told which items are not present.

Functional Details
------
For the simplicity of this project, the items the user will search for will be limited to the following:
apple, banana, cookie, donut, egg and flour (spanning the letters A - F).

The order the user provides the items is not relevant. The path returned will attempt to minimize travel
distance for the user but does not guarantee the absolute minimum (i.e. does not claim to solve the
traveling salesman problem).

User will provide a list of items in the form of:
```['apple', 'banana', 'flour']```

User will receive a path in the form of:
```[[0,0], [0,1], 'apple', [0,2], [0,3], 'banana', [1,3], [2,3], [3,3], 'flour']```

...where apple is located at (0,1), banana is located at (0,3), and flour is located at (3,3), all within
a 4x4 grid with zero obstacles.

Implementation Details
------
Each search area will be represented as an array of arrays (2D) with each element in the sub-array being
an object.

*Important:* Navigation coordinates provided by Pathfinding.js follow the [x, y] format, but are
implemented as an array of arrays (2D). This means that when we say grid coordinate (1,2), this will
in fact be Grid[2][1].

Each element-object will contain the following data:
* isWalkable: denotes whether the element can be walked over/travered or not.
* item: contains a string-value that represents if an object is present at that location, and a 0 if
no item is present.

*Note*: An unwalkable element cannot have an item in it, but a walkable element need not have an item
in it.

Example Objects:
```{isWalkable: false, item: 0}```,
```{isWalkable: true, item: "apple"}```,
```{isWalkable: true, item: 0}```

When a user provides a list of items, the pathfinder will first determine if the search area contains
all items on the list, grabbing the item coordinates along the way (to be used to determine fetch order).

In the same pass, a matrix is built that represents the walkability of the search area.

If all items are found, the program will attempt to find a path.

Else if not all items are found, the program will respond with which items are missing.

Assumign all items are found, the program will sort them "from left to right, top to bottom" (i.e. all
"x=0's" first, then "x=1 y=1" then "x=1 y=2"...etc.) as it is assumed the user will always start from 0,0.

Once the list is sorted, the program will create subpaths by creating paths between item item in the
list (in order), then comine those subpaths into a main path and return that main path to the user.

Example Data Things
------
Element Objects:
```{isWalkable: false, item: 0}```,
```{isWalkable: true, item: "apple"}```,
```{isWalkable: true, item: 0}```

Grid
```[
  [{isWalkable: false, item: 0},{isWalkable: false, item: 0},{isWalkable: true, item: 0}],
  [{isWalkable: true, item: 0},{isWalkable: true, item: "apple"},{isWalkable: true, item: 0}],
  [{isWalkable: true, item: 0},{isWalkable: false, item: 0},{isWalkable: true, item: "banana"}],
]```

Demo
------

An [online demo](http://www.google.com) can be found to showcase the functionality of this project.
