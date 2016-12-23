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
});
