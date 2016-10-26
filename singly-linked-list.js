/**
 * Singly Linked List.
 *
 * Contains nodes which have a data field as well as a 'next' field,
 * which points to the next node in line of nodes.
 * Operations that can be performed on singly linked lists
 * include insertion, deletion and traversal.
 */

function SinglyLinkedList () {
  this.clear();
}

/**
 * Append the specified data to the end of this list.
 *
 * @param  {*}      data
 * @return {Object} The new node
 */

SinglyLinkedList.prototype.add = function (data) {
  var node = {data: data, next: null};
  var currentNode = this.head;

  // Empty list sets head.
  if (!currentNode) {
    this.head = node;
    this.tail = this.tail || node;
    this.size++;
    return node;
  }

  // Non-empty list: append to next available node.
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  this.tail = node;
  this.size++;
  return node;
};

/**
 * Append all of the elements in the specified array
 * to the end of this list.
 *
 * @param  {array}  elements
 * @return {Object} Last inserted node (tail)
 */
SinglyLinkedList.prototype.addAll = function (elements) {
  var i = 0;
  var l = elements.length;
  var lastNode = null;

  for (i; i < l; i++) {
    lastNode = this.add(elements[i]);
  }

  return lastNode;
}

/**
 * Return the element at the specified position in this list.
 *
 * @param  {integer}    index
 * @throws {RangeError} If index is 0 or above size of this list
 * @return {Object}
 */
SinglyLinkedList.prototype.get = function (index) {
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
}

/**
 * Remove the element at a given index.
 *
 * @param  {integer} index
 * @return {Object}  The deleted node
 */
SinglyLinkedList.prototype.remove = function (index) {
  var count = 1;
  var currentNode = this.head;
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

  // Throws an error when out of range.
  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('Index is out of range.');
  }

  // When removing the head.
  if (index === 1) {
    this.head = currentNode.next;
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

    // Replace tail if reached.
    if (nodeToDelete === this.tail) {
      this.tail = beforeNodeToDelete;
    }

    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this.size--;

  return deletedNode;
}

/**
 * Removes the first occurrence of the specified element in this list
 * (when traversing the list from head to tail).
 *
 * @param  {*} element
 * @return {*} node     The removed node
 */
SinglyLinkedList.prototype.removeFirstOccurrence = function (element) {
  var count = 1;
  var currentNode = this.head;

  while (count < this.size) {
    if (element === currentNode.data) {
      return this.remove(count);
    }
    currentNode = currentNode.next;
    count++;
  }
}

/**
 * Removes the last occurrence of the specified element in this list
 * (when traversing the list from head to tail).
 *
 * @param  {*}      element
 * @return {Object} The removed node
 */
SinglyLinkedList.prototype.removeLastOccurrence = function (element) {}

/**
 * Add an alement to the given index in this list.
 * Previous owner of this index is shifted to the right.
 *
 * @param {integer} index
 * @param {*}       element
 */
SinglyLinkedList.prototype.addAtIndex = function (index, element) {
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
  lastNewNode.next = currentNode;
}

/**
 * Append all the elements in the specified array to the specified index.
 * The previous owner of the index is shifted to the right after the last
 * inserted element.
 *
 * @param {integer} index
 * @param {array}   elements
 */
SinglyLinkedList.prototype.addAllAtIndex = function (index, elements) {
  var count = 1;
  var currentNode = this.head;
  var beforeCurrentNode = null;
  var lastNewNode = null;
  var i = 0;
  var l = elements.length;

  // Throws an error when out of range.
  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('Index is out of range.');
  }

  // When replacing the head.
  if (index === 1) {
    this.head = null;
    for (i = 0; i < l; i++) {
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

  for (i = 0; i < l; i++) {
    lastNewNode = this.add(elements[i]);
    if (i === 0) {
      beforeCurrentNode.next = lastNewNode;
    }
  }
  lastNewNode.next = currentNode;
}

/**
 * Return true if this list contains the specified element.
 *
 * @param  {*} element
 * @return {boolean}
 */
SinglyLinkedList.prototype.contains = function (element) {}

/**
 * Remove and return the head.
 *
 * @return {Object} The former head node
 */
SinglyLinkedList.prototype.unshift = function () {}

/**
 * Remove and return the tail.
 *
 * @return {Object} The former tail node
 */
SinglyLinkedList.prototype.pop = function () {}

/**
 * Replace the element at the specified position
 * in this list with the specified element.
 *
 * @param {integer} index
 * @param {*}       element
 */
SinglyLinkedList.prototype.set = function (index, element) {}

/**
 * Return a shallow copy of this SinglyLinkedList.
 *
 * @return {Object} A new SinglyLinkedList instance
 */
SinglyLinkedList.prototype.clone = function () {}

/**
 * Returns an array containing all of the elements
 * in this list in proper sequence (from first to last element).
 *
 * @return {array}
 */
SinglyLinkedList.prototype.toArray = function () {}

/**
 * Remove all of the elements in this list.
 *
 * @return {void}
 */
SinglyLinkedList.prototype.clear = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

module.exports = SinglyLinkedList;
