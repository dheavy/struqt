/**
 * Singly Linked List tests.
 */

var assert = require('assert');
var SinglyLinkedList = require('../singly-linked-list.js');

describe('SinglyLinkedList', function () {
  it('should add values', function () {
    var list = new SinglyLinkedList();
    list.add('element');
    assert.strictEqual(list.size, 1);
  });

  it('should add an array of values', function () {
    var list = new SinglyLinkedList();
    list.addAll([1, 2, 3, 4, 5, 6]);
    assert.strictEqual(list.size, 6);
    assert.strictEqual(list.head.data, 1);
    assert.strictEqual(list.tail.data, 6);
  });

  it('should clear itself of all values', function () {
    var list = new SinglyLinkedList();
    list.add('one');
    list.add('two');
    assert.strictEqual(list.size, 2);
    list.clear();
    assert.strictEqual(list.size, 0);
    assert.strictEqual(list.head, null);
    assert.strictEqual(list.tail, null);
  });

  it('should search a node at a given index', function () {
    var list = new SinglyLinkedList();
    list.addAll(['one', 'two', 'three', 'four', 'five']);
    assert.strictEqual(list.get(2).data, 'two');
    assert.throws(function () { list.get(6) }, RangeError);
  });

  it('should remove a node at a given index', function () {
    var list = new SinglyLinkedList();
    list.addAll(['one', 'two', 'three', 'four', 'five']);
    assert.strictEqual(list.size, 5);
    assert.strictEqual(list.get(1).data, 'one');
    assert.strictEqual(list.get(2).data, 'two');

    list.remove(2);
    assert.strictEqual(list.size, 4);
    assert.strictEqual(list.get(1).data, 'one');
    assert.strictEqual(list.get(2).data, 'three');

    assert.throws(function () { list.remove(10) }, RangeError);
  });
});
