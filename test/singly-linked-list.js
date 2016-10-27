/**
 * Singly Linked List tests.
 */

var assert = require('assert');
var SinglyLinkedList = require('../singly-linked-list.js');

describe('SinglyLinkedList', function () {
  it('should add value', function () {
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
    assert.strictEqual(list.get(3).data, 'three');
    assert.strictEqual(list.get(4).data, 'four');
    assert.strictEqual(list.get(5).data, 'five');

    list.remove(2);
    assert.strictEqual(list.size, 4);
    assert.strictEqual(list.get(1).data, 'one');
    assert.strictEqual(list.get(2).data, 'three');
    assert.strictEqual(list.get(3).data, 'four');
    assert.strictEqual(list.get(4).data, 'five');

    list.remove(4);
    assert.strictEqual(list.size, 3);
    assert.strictEqual(list.tail.data, 'four');

    assert.throws(function () { list.remove(10) }, RangeError);
  });

  it('should add a value from a given index onward', function () {
    var list = new SinglyLinkedList();
    list.addAll(['one', 'two', 'three', 'four', 'five']);
    assert.strictEqual(list.size, 5);
    assert.strictEqual(list.get(1).data, 'one');
    assert.strictEqual(list.get(2).data, 'two');
    assert.strictEqual(list.get(3).data, 'three');
    assert.strictEqual(list.get(4).data, 'four');
    assert.strictEqual(list.get(5).data, 'five');

    list.addAtIndex(1, 'replace head');
    assert.strictEqual(list.size, 6);
    assert.strictEqual(list.get(1).data, 'replace head');
    assert.strictEqual(list.get(2).data, 'one');
    assert.strictEqual(list.get(3).data, 'two');
    assert.strictEqual(list.get(4).data, 'three');
    assert.strictEqual(list.get(5).data, 'four');
    assert.strictEqual(list.get(6).data, 'five');

    list.addAtIndex(4, 'between two and three');
    assert.strictEqual(list.size, 7);
    assert.strictEqual(list.get(1).data, 'replace head');
    assert.strictEqual(list.get(2).data, 'one');
    assert.strictEqual(list.get(3).data, 'two');
    assert.strictEqual(list.get(4).data, 'between two and three');
    assert.strictEqual(list.get(5).data, 'three');
    assert.strictEqual(list.get(6).data, 'four');
    assert.strictEqual(list.get(7).data, 'five');

    assert.throws(function () { list.addAtIndex(30, 'x') }, RangeError);
  });

  it('should add an array of values from a given index onward', function () {
    var list = new SinglyLinkedList();
    list.addAll(['one', 'two', 'three']);
    assert.strictEqual(list.size, 3);
    assert.strictEqual(list.get(1).data, 'one');
    assert.strictEqual(list.get(2).data, 'two');
    assert.strictEqual(list.get(3).data, 'three');

    list.addAllAtIndex(2, ['x', 'y', 'z']);
    assert.strictEqual(list.size, 6);
    assert.strictEqual(list.get(1).data, 'one');
    assert.strictEqual(list.get(2).data, 'x');
    assert.strictEqual(list.get(3).data, 'y');
    assert.strictEqual(list.get(4).data, 'z');
    assert.strictEqual(list.get(5).data, 'two');
    assert.strictEqual(list.get(6).data, 'three');

    assert.throws(function () { list.addAllAtIndex(30, 'x') }, RangeError);
  });

  it('should remove the first occurence of an element', function () {
    var list = new SinglyLinkedList();
    var o = {foo: 'bar'};
    list.addAll([o, 'baz', 'qux', o]);
    assert.strictEqual(list.size, 4);

    list.removeFirstOccurrence(o);
    assert.strictEqual(list.size, 3);
    assert.strictEqual(list.get(1).data, 'baz');
    assert.strictEqual(list.get(3).data, o);
  });

  it('should remove the last occurence of an element', function () {
    var list = new SinglyLinkedList();
    var o = {foo: 'bar'};
    list.addAll([o, 'baz', 'qux', o]);
    assert.strictEqual(list.size, 4);

    list.removeLastOccurrence(o);
    assert.strictEqual(list.size, 3);
    assert.strictEqual(list.get(1).data, o);
    assert.strictEqual(list.get(3).data, 'qux');
    assert.strictEqual(list.tail.data, 'qux')
  });

  it('should return a boolean stating if it contains a given element', function () {
    var list = new SinglyLinkedList();
    var o = {foo: 'bar'};
    list.addAll([o, 'foo', 'bar', 'baz']);
    assert.strictEqual(list.contains('qux'), false);
    assert.strictEqual(list.contains('foo'), true);
    assert.strictEqual(list.contains(o), true);
  });
});
