const areEquals = require('deep-equal');

/**
 * Singly linked list.
 * Its instances contain nodes that are plain old JavaScript objects.
 * These nodes have a `data` field containing any value, and a `next` field,
 * which points to the next node in line of nodes.
 *
 * @constructor
 */
function List() {
  this.clear();
};

/**
 * Append data to a new node at the end of the list.
 *
 * @param  {*}      data  Any type of data.
 * @return {Object} The new node.
 */
List.prototype.add = function (data) {
  const node = {data, next: null};

  if (this.size === 0) {
    this.tail = node;
    this.head.next = node;
    this.size++;
    return node;
  }

  const oldTail = this.tail;
  oldTail.next = node;
  this.tail = node;
  this.size++;

  return node;
};

/**
 * Append any numbers of elements as new nodes at the end of the list.
 *
 * @param  {*} ...data  Any numbers of any type of data.
 * @return {Object} The last inserted node (tail).
 */
List.prototype.addAll = function () {
  [].forEach.call(arguments, data => this.add(data));
  return this.tail;
};

/**
 * Append data to a new node placed at the given index of the list.
 * Previous owner of this index becomes next in line after the new node.
 *
 * @param  {integer} index    The index at which the new node should be inserted.
 * @param  {*}       element  Any object to be used as data for the node.
 * @throws {RangeError} If index is out of bounds.
 * @return {Object} The newly created node.
 */
List.prototype.addAtIndex = function (index, data) {
  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('index is out of range');
  }

  let cursor = 1;
  let prev = this.head;
  let current = this.head.next;

  while (cursor < index) {
    prev = current;
    current = current.next;
    cursor++;
  }

  const node = {data, next: current};
  prev.next = node;

  this.size++;

  return node;
};

/**
 * Append any number of data to new nodes placed at the given index.
 * Previous owner of the index becomes next in line after the latest
 * new node.
 *
 * @param  {integer} index    The index at which the new node should be inserted.
 * @param  {*}       ...data  Any number of any type of data.
 * @throws {RangeError} If index is out of bounds.
 * @return {Object} The last of the newly created node.
 */
List.prototype.addAllAtIndex = function () {
  let index = +[].slice.call(arguments, 0, 1);

  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('index is out of range');
  }

  let prev = this.head;
  let current = this.head.next;
  let cursor = 1;
  let data = [].slice.call(arguments, 1);

  while (cursor < index) {
    prev = current;
    current = current.next;
    if (!current) {
      this.tail = prev;
    }
    cursor++;
  }

  // Create array of newly created nodes from data.
  // Process recursively and return reference to the latest
  // node created when done.
  const endNode = (function weave(i, nodes, data, prev, current) {
    if (i === data.length) {
      // Transplant both ends of array of new nodes to existing linked list.
      prev.next = nodes[0];
      const endNode = nodes[nodes.length - 1];
      endNode.next = current;

      // Kill references of nodes and return latest one.
      nodes = null;
      return endNode;
    }

    // Build node and link reference with previous one.
    const node = {data: data[i], next: null};
    if (i > 0) {
      nodes[i - 1].next = node;
    }

    // Store node and repeat.
    nodes.push(node);
    return weave(++i, nodes, data, prev, current);
  })(0, [], data, prev, current);

  this.size += data.length;

  return endNode;
};

/**
 * Return the node at the specified position.
 *
 * @param  {integer}    index   The index to look for.
 * @throws {RangeError} If index is out of bounds.
 * @return {Object}  The node at the requested index.
 */
List.prototype.get = function (index) {
  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('index is out of range');
  }

  let cursor = 1;
  let current = this.head.next;

  if (cursor === index) {
    return current;
  }

  while (cursor < index) {
    current = current.next;
    cursor++;
  }

  return current;
};

/**
 * Remove the element at a given index.
 *
 * @param  {integer} index  The index of the node to remove.
 * @throws {RangeError} If index is out of bounds.
 * @return {Object}  The deleted node.
 */
List.prototype.remove = function (index) {
  if (this.size === 0 || index < 1 || index > this.size) {
    throw new RangeError('index is out of range');
  }

  let cursor = 1;
  let prev = this.head;
  let current = this.head.next;
  let next = current.next;

  while (cursor < index) {
    prev = current;
    current = current.next;
    next = current.next;
    cursor++;
  }

  const deleted = current;
  prev.next = next;
  if (!next) {
    this.tail = prev;
  }
  current = null;
  this.size--;

  return deleted;
};

/**
 * Return true if this list contains a node holding the specified data.
 *
 * @param  {*} data  The data to look for within nodes.
 * @return {boolean}  True if the data was found in a node.
 */
List.prototype.contains = function (data) {
  let current = this.head.next;

  if (areEquals(current.data, data)) {
    return true
  }

  let cursor = 1;
  while (cursor < this.size) {
    current = current.next;
    if (areEquals(current.data, data)) {
      return true;
    }
    cursor++;
  }

  return false;
};

/**
 * Remove and return the first node.
 *
 * @return {Object} The removed node.
 */
List.prototype.shift = function () {
  return this.remove(1);
};


/**
 * Remove and return the last node.
 *
 * @return {Object} The removed node.
 */
List.prototype.pop = function () {
  return this.remove(this.size);
};

/**
 * Replace data in the node at specified position.
 *
 * @param  {integer} index  The index of the node to edit.
 * @param  {*}       data   Any data to update the node's data field.
 * @return {void}
 */
List.prototype.set = function (index, data) {
  this.get(index).data = data;
};

/**
 * Return a shallow copy of the list.
 *
 * @return {Object} A singly linked list instance with copied nodes and data.
 */
List.prototype.clone = function () {
  return Object.assign({}, this);
};

/**
 * Return an array compiling data from all nodes in the list.
 *
 * @return {Array}  An array of data based on the actual nodes' data.
 */
List.prototype.toArray = function () {
  let current = this.head.next;
  let cursor = 1;
  let a = [];

  while (cursor < this.size) {
    a.push(current.data);
    current = current.next;
    cursor++;
  }

  return a;
};

/**
 * Remove all elements from the list and reseat its head.
 *
 * @return {void}
 */
List.prototype.clear = function () {
  this.head = {next: null};
  this.tail = null;
  this.size = 0;
};

module.exports = List;
