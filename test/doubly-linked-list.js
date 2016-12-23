/**
 * Tests for singly linked list.
 */
const assert = require('assert');
const LinkedList = require('../linkedlists/doubly');

let list;

describe('Doubly Linked List', () => {
  beforeEach(() => {
    list = new LinkedList();
  });

  it('should add a value', () => {
    list.add('monday');
    assert.strictEqual(list.size, 1);
    assert.strictEqual(list.head.next.data, 'monday');
    assert.strictEqual(list.get(1).previous, list.head);
  });

  it('should get node at given index', () => {
    list.add('monday');
    list.add('tuesday');
    list.add('wednesday');

    assert.strictEqual(list.get(1).data, 'monday');
    assert.strictEqual(list.get(2).data, 'tuesday');
    assert.strictEqual(list.get(3).data, 'wednesday');
  });

  it ('should add all values', () => {
    list.addAll('monday', 'tuesday', 'wednesday');
    assert.strictEqual(list.size, 3);

    assert.strictEqual(list.get(1).data, 'monday');
    assert.strictEqual(list.get(2).data, 'tuesday');
    assert.strictEqual(list.get(3).data, 'wednesday');

    assert.strictEqual(list.get(1).previous, list.head);
    assert.strictEqual(list.get(2).previous, list.get(1));
    assert.strictEqual(list.get(3).previous, list.get(2));
  });

  it('should add value at defined index', () => {
    list.addAll('monday', 'wednesday');
    list.addAtIndex(2, 'tuesday');
    assert.strictEqual(list.size, 3);
    assert.strictEqual(list.get(1).data, 'monday');
    assert.strictEqual(list.get(2).data, 'tuesday');
    assert.strictEqual(list.get(3).data, 'wednesday');
    assert.strictEqual(list.get(2).previous, list.get(1));

    list.addAtIndex(1, 'sunday');
    assert.strictEqual(list.size, 4);
    assert.strictEqual(list.get(1).data, 'sunday');
    assert.strictEqual(list.get(1).data.previous, list.head);
    assert.strictEqual(list.get(2).data, 'monday');
    assert.strictEqual(list.tail.data, 'wednesday');
  });

  it('should add all values at defined index onwards', () => {
    list.addAll('monday', 'saturday');
    list.addAllAtIndex(2, 'tuesday', 'wednesday', 'thursday', 'friday');
    assert.strictEqual(6, list.size);
    assert.strictEqual(list.get(1).data, 'monday');
    assert.strictEqual(list.get(2).data, 'tuesday');
    assert.strictEqual(list.get(3).data, 'wednesday');
    assert.strictEqual(list.get(4).data, 'thursday');
    assert.strictEqual(list.get(5).data, 'friday');
    assert.strictEqual(list.get(6).data, 'saturday');
    assert.strictEqual(list.tail.data, 'saturday');
    assert.strictEqual(list.tail.previous, list.get(5));

    list.addAllAtIndex(1, 'before sunday', 'sunday');
    assert.strictEqual(8, list.size);
    assert.strictEqual(list.get(1).data, 'before sunday');
    assert.strictEqual(list.get(1).data.previous, list.head);
    assert.strictEqual(list.get(2).data, 'sunday');
    assert.strictEqual(list.get(3).data, 'monday');
  });

  it('should remove node at given index', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');

    const removed = list.remove(1);
    assert.strictEqual(list.size, 4);
    assert.strictEqual(removed.data, 'monday');
    assert.strictEqual(list.get(1).data, 'tuesday');
    assert.strictEqual(list.get(1).previous, list.head);
    assert.strictEqual(list.get(2).previous.data, 'tuesday');

    list.remove(4);
    assert.strictEqual(list.tail.data, 'thursday');
    assert.strictEqual(list.tail.previous.data, 'wednesday');
  });

  it('should return true if list contains data, false otherwise', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
    assert.strictEqual(true, list.contains('monday'));
    assert.strictEqual(false, list.contains('sunday'));
  });

  it('should shift value, similar to an array', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
    const shifted = list.shift();

    assert.strictEqual(list.size, 4);
    assert.strictEqual(shifted.data, 'monday');
    assert.strictEqual(list.get(1).data, 'tuesday');
  });

  it('should pop value, similar to an array', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
    const popped = list.pop();

    assert.strictEqual(list.size, 4);
    assert.strictEqual(popped.data, 'friday');
    assert.strictEqual(list.get(4).data, 'thursday');
  });

  it('should set (edit) data in node at given index', () => {
    list.addAll('xxx', 'tuesday', 'wednesday', 'thursday', 'ooo');

    list.set(1, 'monday');
    assert.strictEqual(list.get(1).data, 'monday');

    list.set(5, 'friday');
    assert.strictEqual(list.get(5).data, 'friday');
  });

  it('should return a clone (shallow copy) of the list', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
    const clone = list.clone();

    assert.strictEqual(JSON.stringify(list), JSON.stringify(clone));
  });

  it('should return an array made from nodes data', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
    const arr = list.toArray();

    assert.strictEqual(
      JSON.stringify(arr),
      JSON.stringify(['monday', 'tuesday', 'wednesday', 'thursday', 'friday'])
    );
  });

  it('should clear/reset list', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');

    list.clear();
    assert.strictEqual(list.size, 0);
    assert.strictEqual(list.tail, null);
    assert.deepStrictEqual(list.head, {next: null});
  });
});
