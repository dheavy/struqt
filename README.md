# Struqt

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Build Status](https://travis-ci.org/dheavy/struqt.svg?branch=master)](https://travis-ci.org/dheavy/struqt)
[![Coverage Status](https://coveralls.io/repos/github/dheavy/struqt/badge.svg?branch=master)](https://coveralls.io/github/dheavy/struqt?branch=master)

  *Struqt* is a JavaScript (ES2015) library implementing commonly used data structures.
  Its sole dependency is [`lodash.isequal`](https://www.npmjs.com/package/lodash.isequal), used for deep equality comparison of JavaScript objects.

### Installation

  Install via **npm** with the following command.

  `npm install --save struqt`

### Usage

##### API

  `SinglyLinkedList` and `DoublyLinkedList`.
  - `list.add(element)` adds a new `element` (of any type) as a node to the list.
  - `list.addAll(elements)` inserts each members of an `elements` array into list.
  - `list.get(index)` returns the node at the given `index`.
  - `list.remove(index)` removes and return the node at a given `index`.
  - `list.removeFirstOccurrence(element)` scans list from left to right and remove and returns the first node holding the given `element` as data; returns null if none was found.
  - `list.removeLastOccurrence(element)` scans list from left to right and remove and returns the last node holding the given `element` as data; returns null if none was found.
  - `list.addAtIndex(index, element)` adds a new `element` in place of the given `index` in the list.
  - `list.addAllAtIndex(index, elements)` inserts each members of an `elements` array into list, starting from the given `index` in it.
  - `list.contains(data)` returns a boolean value stating whether or not the list contains a node holding the specified `data` (uses deep equality comparison).
  - `list.shift()` returns and removes the `head` of the list.
  - `list.pop()` returns and removes the `tail` of the list.
  - `list.set(index, element)` replaces the data held by the node at a given `ìndex` with the given `element`.
  - `list.clone()` returns a shallow copy of the list.
  - `list.toArray()` returns an array of data compiled from the nodes in the list.
  - `list.clear()` resets the list.

##### Documentation
Documentation for the library can be generated using [JSDoc](http://usejsdoc.org/).
Run the following command to dump a small HTML-based documentation in a `docs` directory.

`npm run doc`

### Tests

  Run **Mocha/Chai** tests with the following command.

  `npm test`

### Contributing

  TBA
