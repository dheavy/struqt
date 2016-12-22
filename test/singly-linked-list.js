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
});
