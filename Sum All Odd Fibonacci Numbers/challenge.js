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
  
  sumFibs(4);