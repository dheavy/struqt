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
    this.tail = node;
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
