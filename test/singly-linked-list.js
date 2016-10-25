/**
 * Singly Linked List tests.
 */

var assert = require('assert');
var SinglyLinkedList = require('../singly-linked-list.js');

describe('SinglyLinkedList', function () {
  it('should be able to add values', function () {
    var list = new SinglyLinkedList();
    list.add('element');
    assert.strictEqual(list.size, 1);
  });

  it('should be able to add an array of values', function () {
    var list = new SinglyLinkedList();
    list.addAll([1, 2, 3, 4, 5, 6]);
    assert.strictEqual(list.size, 6);
  });
});
