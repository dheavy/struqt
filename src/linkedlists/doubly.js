const areEquals = require('deep-equal');

function List() {
  this.clear();
}

/**
 * Append data to a new node at the end of the list.
 *
 * @param  {*}      data  Any type of data.
 * @return {Object} The new node.
 */
List.prototype.add = function (data) {

};

/**
 * Append any numbers of elements as new nodes at the end of the list.
 *
 * @param  {*} ...data  Any numbers of any type of data.
 * @return {Object} The last inserted node (tail).
 */
List.prototype.addAll = function () {

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

};

/**
 * Return the node at the specified position.
 *
 * @param  {integer}    index   The index to look for.
 * @throws {RangeError} If index is out of bounds.
 * @return {Object}  The node at the requested index.
 */
List.prototype.get = function (index) {

};

/**
 * Remove the element at a given index.
 *
 * @param  {integer} index  The index of the node to remove.
 * @throws {RangeError} If index is out of bounds.
 * @return {Object}  The deleted node.
 */
List.prototype.remove = function (index) {

};

/**
 * Return true if this list contains a node holding the specified data.
 *
 * @param  {*} data  The data to look for within nodes.
 * @return {boolean}  True if the data was found in a node.
 */
List.prototype.contains = function (data) {

};

/**
 * Remove and return the first node.
 *
 * @return {Object} The removed node.
 */
List.prototype.shift = function () {

};


/**
 * Remove and return the last node.
 *
 * @return {Object} The removed node.
 */
List.prototype.pop = function () {

};

/**
 * Replace data in the node at specified position.
 *
 * @param  {integer} index  The index of the node to edit.
 * @param  {*}       data   Any data to update the node's data field.
 * @return {void}
 */
List.prototype.set = function (index, data) {

};

/**
 * Return a shallow copy of the list.
 *
 * @return {Object} A singly linked list instance with copied nodes and data.
 */
List.prototype.clone = function () {

};

/**
 * Return an array compiling data from all nodes in the list.
 *
 * @return {Array}  An array of data based on the actual nodes' data.
 */
List.prototype.toArray = function () {

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
