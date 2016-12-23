/**
 * Tests for singly linked list.
 */
const assert = require('assert');
const LinkedList = require('../src/linkedlists/singly');

let list;

describe('Singly Linked List', () => {
  beforeEach(() => {
    list = new LinkedList();
  });

  it('should add a value', () => {
    list.add('monday');
    assert.strictEqual(list.size, 1);
  });

  it ('should add all values', () => {
    list.addAll('monday', 'tuesday', 'wednesday');
    assert.strictEqual(list.size, 3);
  });

  it('should add value at defined index', () => {
    list.addAll('monday', 'wednesday');
    list.addAtIndex(2, 'tuesday');
    assert.strictEqual(list.size, 3);
    assert.strictEqual(list.get(1).data, 'monday');
    assert.strictEqual(list.get(2).data, 'tuesday');
    assert.strictEqual(list.get(3).data, 'wednesday');

    list.addAtIndex(1, 'sunday');
    assert.strictEqual(list.size, 4);
    assert.strictEqual(list.get(1).data, 'sunday');
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

    list.addAllAtIndex(1, 'before sunday', 'sunday');
    assert.strictEqual(8, list.size);
    assert.strictEqual(list.get(1).data, 'before sunday');
    assert.strictEqual(list.get(2).data, 'sunday');
    assert.strictEqual(list.get(3).data, 'monday');
  });

  it('should get node at given index', () => {
    list.addAll('monday', 'tuesday', 'wednesday');
    assert.strictEqual(list.get(1).data, 'monday');
    assert.strictEqual(list.get(2).data, 'tuesday');
    assert.strictEqual(list.get(3).data, 'wednesday');
  });

  it('should remove node at given index', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');

    const removed = list.remove(1);
    assert.strictEqual(list.size, 4);
    assert.strictEqual(removed.data, 'monday');
    assert.strictEqual(list.get(1).data, 'tuesday');

    list.remove(4);
    assert.strictEqual(list.tail.data, 'thursday');
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
  });

  it('should pop value, similar to an array', () => {
    list.addAll('monday', 'tuesday', 'wednesday', 'thursday', 'friday');
    const popped = list.pop();

    assert.strictEqual(list.size, 4);
    assert.strictEqual(popped.data, 'friday');
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

    assert.equal(JSON.stringify(list), JSON.stringify(clone));
  });
});
