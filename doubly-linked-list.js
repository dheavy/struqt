'use strict';

/**
 * A DoublyLinkedList instance ontains nodes which have a `data` field as well
 * as `prev` and `next` fields (the "links") which point to the previous and
 * next node in line of nodes. Operations that can be performed on a doubly
 * linked lists include insertion, deletion and traversal.
 *
 * @constructor
 */
function DoublyLinkedList () {
  this.clear()
}

/**
 * Append the specified data to the end of this list.
 *
 * @param  {*}      data  Any object.
 * @return {Object} The new node.
 */
DoublyLinkedList.prototype.add = function (data) {
  var node = {data: data, prev: null, next: null};
  var currentNode = this.head;
  var prevNode = null;

  // Empty list sets head.
  if (!currentNode) {
    this.head = node;
    this.tail = this.tails || node;
    this.size++;
    return node;
  }

  // Non-empty list: append to next available node.
  while (currentNode.next) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  currentNode.prev = prevNode;
  currentNode.next = node;
  this.tail = node;
  this.size++;
  return node;
};

/**
 * Append all of the elements in the specified array
 * to the end of this list.
 *
 * @param  {array}  elements  An array of any objects to be set as data for nodes.
 * @return {Object} The last inserted node (tail).
 */
DoublyLinkedList.prototype.addAll = function (elements) {
  var i = 0;
  var l = elements.length;
  var lastNode = null;

  for (i; i < l; i++) {
    lastNode = this.add(elements[i]);
  }

  return lastNode;
};

/**
 * Return the element at the specified position in this list.
 *
 * @param  {integer}    index   The index to look for.
 * @throws {RangeError} If index is 0 or above size of this list
 * @return {Object}  The node at the requested index.
 */
DoublyLinkedList.prototype.get = function (index) {
  var cursor = 1;
  var currentNode = this.head;

  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('Index is out of range.');
  }

  while (cursor < index) {
    currentNode = currentNode.next;
    cursor++;
  }

  return currentNode;
};

/**
 * Remove the element at a given index.
 *
 * @param  {integer} index  The index to target for node removal.
 * @return {Object}  The deleted node.
 */
DoublyLinkedList.prototype.remove = function (index) {
  var count = 1;
  var currentNode = this.head;
  var beforeNodeToDelete = null;
  var afterNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

  // Throws an error when out of range.
  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('Index is out of range.');
  }

  // When removing the head.
  if (index === 1) {
    this.head = currentNode.next;
    this.head.prev = null;
    deletedNode = currentNode;
    currentNode = null;
    this.size--;

    return deletedNode;
  }

  // When removing any other.
  while (count < index) {
    beforeNodeToDelete = currentNode;
    currentNode = currentNode.next;
    nodeToDelete = currentNode;
    afterNodeToDelete = currentNode.next;

    // Replace tail if reached.
    if (nodeToDelete === this.tail) {
      this.tail = beforeNodeToDelete;
    }

    count++;
  }

  beforeNodeToDelete.next = afterNodeToDelete;
  if (afterNodeToDelete) {
    afterNodeToDelete.prev = beforeNodeToDelete;
  }
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this.size--;

  return deletedNode;
};

/**
 * Removes the first occurrence of the specified element in this list
 * (when traversing the list from head to tail).
 *
 * @param  {*} element  The data the list should look for to delete the first matching node.
 * @return {*} node     The removed node, bearing the first occurrence of the data.
 */
DoublyLinkedList.prototype.removeFirstOccurrence = function (element) {
  var count = 1;
  var currentNode = this.head;

  while (count <= this.size) {
    if (require('lodash.isequal')(element, currentNode.data)) {
      return this.remove(count);
    }
    currentNode = currentNode.next;
    count++;
  }
};

/**
 * Removes the last occurrence of the specified element in this list
 * (when traversing the list from head to tail).
 *
 * @param  {*}      element   The data the list should look for to delete the last matching node.
 * @return {Object} The removed node, bearing the last occurence of the data.
 */
DoublyLinkedList.prototype.removeLastOccurrence = function (element) {
  var count = 1;
  var currentNode = this.head;
  var deletedIndex = 1;

  while (count <= this.size) {
    if (require('lodash.isequal')(element, currentNode.data)) {
      deletedIndex = count
    }
    currentNode = currentNode.next;
    count++;
  }

  return this.remove(deletedIndex);
};

/**
 * Add an alement to the given index in this list.
 * Previous owner of this index is shifted to the right.
 *
 * @param {integer} index    The index at which the new node should be inserted.
 * @param {*}       element  Any object to be used as data for the node.
 */
DoublyLinkedList.prototype.addAtIndex = function (index, element) {
  var count = 1;
  var currentNode = this.head;
  var beforeCurrentNode = null;
  var lastNewNode = null;

  // Throws an error when out of range.
  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('Index is out of range.');
  }

  // When replacing the head.
  if (index === 1) {
    this.head = null;
    lastNewNode = this.add(element);
    lastNewNode.next = currentNode;
    return;
  }

  // Any other.
  while (count < index) {
    beforeCurrentNode = currentNode;
    currentNode = currentNode.next;
    count++;
  }

  lastNewNode = this.add(element);
  beforeCurrentNode.next = lastNewNode;
  lastNewNode.prev = beforeCurrentNode;
  lastNewNode.next = currentNode;
};

/**
 * Append all the elements in the specified array to the specified index.
 * The previous owner of the index is shifted to the right after the last
 * inserted element.
 *
 * @param {integer} index     The index at which the new node should be inserted.
 * @param {array}   elements  An array of objects to use as data for nodes.
 */
DoublyLinkedList.prototype.addAllAtIndex = function (index, elements) {
  var count = 1;
  var currentNode = this.head;
  var beforeCurrentNode = null;
  var lastNewNode = null;
  var i = 0;
  var len = elements.length;

  // Throws an error when out of range.
  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('Index is out of range.');
  }

  // When replacing the head.
  if (index === 1) {
    this.head = null;
    for (i = 0; i < len; i++) {
      lastNewNode = this.add(elements[i]);
    }
    lastNewNode.next = currentNode;
    return;
  }

  // Any other.
  while (count < index) {
    beforeCurrentNode = currentNode;
    currentNode = currentNode.next;
    count++;
  }

  for (i = 0; i < len; i++) {
    lastNewNode = this.add(elements[i]);
    if (i === 0) {
      beforeCurrentNode.next = lastNewNode;
    }
  }
  lastNewNode.next = currentNode;
};

/**
 * Return true if this list contains the specified element.
 *
 * @param  {*} element  The object used as data to look for within nodes.
 * @return {boolean}  True if the data was found in a node.
 */
DoublyLinkedList.prototype.contains = function (element) {
  var count = 1;
  var currentNode = this.head;

  while (count <= this.size) {
    if (currentNode.data === element) {
      return true;
    }
    currentNode = currentNode.next;
    count++;
  }

  return false;
};

/**
 * Remove and return the head.
 *
 * @return {Object} The former head node.
 */
DoublyLinkedList.prototype.shift = function () {
  return this.remove(1);
};

/**
 * Remove and return the tail.
 *
 * @return {Object} The former tail node.
 */
DoublyLinkedList.prototype.pop = function () {
  return this.remove(this.size);
};

/**
 * Replace the element at the specified position
 * in this list with the specified element.
 *
 * @param {integer} index     The index to target for node data replacement.
 * @param {*}       element   Any object. The new data for the targeted node.
 */
DoublyLinkedList.prototype.set = function (index, element) {
  this.get(index).data = element;
};

/**
 * Return a shallow copy of this SinglyLinkedList.
 *
 * @return {Object} A new SinglyLinkedList instance.
 */
DoublyLinkedList.prototype.clone = function () {
  return Object.assign({}, this);
};

/**
 * Return an array containing all of the elements
 * in this list in proper sequence (from first to last element).
 *
 * @return {array}  An array of data based on nodes' data.
 */
DoublyLinkedList.prototype.toArray = function () {
  var currentNode = this.head
  var count = 1;
  var arr = [];

  while (count <= this.size) {
    arr.push(currentNode.data);
    currentNode = currentNode.next;
    count++;
  }

  return arr;
};

/**
 * Remove all of the elements in this list.
 *
 * @return {void}
 */
DoublyLinkedList.prototype.clear = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

module.exports = DoublyLinkedList;
