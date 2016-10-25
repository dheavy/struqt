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
 * @param {array} data
 */
SinglyLinkedList.prototype.addAll = function (data) {
  var i = 0;
  var l = data.length;

  for (i; i < l; i++) {
    this.add(data);
  }
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
