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
  });
});
