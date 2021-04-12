function addTogether(a) { 
    if (typeof a !== 'number') {
      return;
    }
    
    if (arguments.length > 1) {
      for (const arg of arguments) {
        if (typeof arg !== 'number') {
          return;
        }
      } 
      return Object.values(arguments).reduce((acc, curr) => acc + curr, 0);
    } else {
      return function(b) {
        if (typeof b !== 'number') {
          return;
        }
        return a + b;
      }
    }
  }
// TESTS
// addTogether(2, 3) should return 5.
// addTogether(23, 30) should return 53.
// addTogether(5)(7) should return 12.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.