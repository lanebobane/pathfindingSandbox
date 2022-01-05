PathfindingSandbox.js
==============
#### A first look into Pathfinding.js, library I may use for my Capstone Project ####

Project Description
------------

The aim of this project is to satisfy simple user-stories having to do with determining the shortest
path to fetch a list of items.

User Stories
------
1. As a thing-fetcher, I can provide a list of things and an intended search area and will be given
an optimal path to follow to retrieve them.
2. If my intended search area does not contain all items on my list, I am told which items are not
present.

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


Demo
------

An [online demo](http://www.google.com) can be found to showcase the functionality of this project.
