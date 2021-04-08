function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;

  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }

  return sum;
}

// TESTS
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.
