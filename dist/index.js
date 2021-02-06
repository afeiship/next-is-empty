/*!
 * name: @jswork/next-is-empty
 * description: Check whether a value is empty.
 * homepage: https://github.com/afeiship/next-is-empty
 * version: 1.0.0
 * date: 2021-02-06 10:01:17
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var hasOwn = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;

  nx.isEmpty = function (inValue) {
    // Null and Undefined...
    if (inValue == null) return true;
    // Booleans...
    if ('boolean' == typeof inValue) return false;
    // Numbers...
    if ('number' == typeof inValue) return inValue === 0;
    // Strings...
    if ('string' == typeof inValue) return inValue.length === 0;
    // Functions...
    if ('function' == typeof inValue) return inValue.length === 0;
    // Arrays...
    if (Array.isArray(inValue)) return inValue.length === 0;
    // Errors...
    if (inValue instanceof Error) return inValue.message === '';
    // Objects...
    if (inValue.toString == toString) {
      switch (inValue.toString()) {
        // Maps, Sets, Files and Errors...
        case '[object File]':
        case '[object Map]':
        case '[object Set]': {
          return inValue.size === 0;
        }
        // Plain objects...
        case '[object Object]': {
          for (var key in inValue) {
            if (hasOwn.call(inValue, key)) return false;
          }
          return true;
        }
      }
    }
    // Anything else...
    return false;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isEmpty;
  }
})();
