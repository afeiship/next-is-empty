(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.isEmpty should work', function () {
      expect(nx.isEmpty([])).toBe(true); // true
      expect(nx.isEmpty({})).toBe(true);
      expect(nx.isEmpty('')).toBe(true); // true
      expect(nx.isEmpty(true)).toBe(false); // true
      expect(nx.isEmpty(false)).toBe(false); // true
      expect(nx.isEmpty(null)).toBe(true); // true
      expect(nx.isEmpty(undefined)).toBe(true); // true
      expect(nx.isEmpty(new Map())).toBe(true); // true
      expect(nx.isEmpty(new Set())).toBe(true); // true
      expect(nx.isEmpty(new Error())).toBe(true); // true
      expect(nx.isEmpty(0)).toBe(true); // true
      expect(nx.isEmpty(function () {})).toBe(true); // true

      expect(nx.isEmpty(new Error('fail'))).toBe(false); // true
      expect(nx.isEmpty(new Set([1]))).toBe(false); // true
      expect(nx.isEmpty(new Map([['key', 'value']]))).toBe(false); // true
      expect(nx.isEmpty('string')).toBe(false); // true
      expect(nx.isEmpty(function (a, b) {})).toBe(false); // true
      expect(nx.isEmpty(['a', 'b'])).toBe(false); // true
      expect(nx.isEmpty({ a: 'b' })).toBe(false); // true
    });
  });
})();
