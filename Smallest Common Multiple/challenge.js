const divisibleByAll = (start, end, num) => {
    for (let i = start; i < end; i++) {
      if (num % i !== 0) {
        return false;
      }
    }
    return true;
  }
  
  function smallestCommons(arr) {
    arr.sort((a, b) => a - b);
    
    const first = arr[0];
    const second = arr[1];
    let counter = second;
    
    while(!divisibleByAll(first, second, counter)) {
      counter += second;
    } 
    return counter;
  }

  
smallestCommons([1, 5]);