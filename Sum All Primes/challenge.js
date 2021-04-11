const isPrime = (num) => {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0 && i !== 1 && i !== num) {
        return false
      }
    }
    return true;
  }
  
  function sumPrimes(num) {
    let primeSum = 0;
    for (let i = 1; i <= num; i++) {
      if (isPrime(i) && i !== 1) {
        console.log(i);
        primeSum += i;
      }
    }
    return primeSum;
  }
  
// TESTS
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.