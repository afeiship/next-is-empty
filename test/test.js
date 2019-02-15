var nx = require('next-js-core2');
require('../src/next-is-empty');
var empty = nx.isEmpty;

test('nx.isEmpty', function() {
  expect(empty([])).toBe(true); // true
  expect(empty({})).toBe(true);
  expect(empty('')).toBe(true); // true
  expect(empty(true)).toBe(false); // true
  expect(empty(false)).toBe(false); // true
  expect(empty(null)).toBe(true); // true
  expect(empty(undefined)).toBe(true); // true
  expect(empty(new Map())).toBe(true); // true
  expect(empty(new Set())).toBe(true); // true
  expect(empty(new Error())).toBe(true); // true
  expect(empty(0)).toBe(true); // true
  expect(empty(function() {})).toBe(true); // true

  expect(empty(new Error('fail'))).toBe(false); // true
  expect(empty(new Set([1]))).toBe(false); // true
  expect(empty(new Map([['key', 'value']]))).toBe(false); // true
  expect(empty('string')).toBe(false); // true
  expect(empty(function(a, b) {})).toBe(false); // true
  expect(empty(['a', 'b'])).toBe(false); // true
  expect(empty({ a: 'b' })).toBe(false); // true
});
