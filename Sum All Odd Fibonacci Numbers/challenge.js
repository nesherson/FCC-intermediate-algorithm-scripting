function sumFibs(num) {
    let fibSum = 0;
    let sumFibOdd = 0;
    
    let first = 0;
    let second = 1;
    for (let i = 1; i <= num; i++) {
      
      if (second % 2 !== 0 && second <= num) {
        sumFibOdd += second;
      }
      
      fibSum = first + second;
      first = second;
      second = fibSum; 
    }
    
    return sumFibOdd;
  }
  
// TESTS
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.