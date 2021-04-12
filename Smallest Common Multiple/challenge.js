const divisibleByAll = (start, end, num) => {
    for (let i = start; i < end; i++) {
      if (num % i !== 0) {
        return false;
      }
    }
    return true;
  }
  
  function smallestCommons(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const first = sortedArr[0];
    const second = sortedArr[1];
    let counter = second;
    
    while(!divisibleByAll(first, second, counter)) {
      counter += second;
    } 
    return counter;
  }
  
// TESTS
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.