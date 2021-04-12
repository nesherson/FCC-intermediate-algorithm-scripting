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
  
  addTogether(2,3);