/**
 * Singly Linked List tests.
 */

var assert = require('assert');
var SinglyLinkedList = require('../singly-linked-list.js');

describe('SinglyLinkedList', function () {
  it('should be possible to add values', function () {
    var list = new SinglyLinkedList();
    list.add('element');
    assert.strictEqual(list.size, 1);
  });
});
