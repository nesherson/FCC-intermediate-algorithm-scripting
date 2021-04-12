function uniteUnique(...arr) {
    let tempArr = arr.flat();
    tempArr = tempArr.filter((el, i, arr) => {
      return arr.indexOf(el) === i;
    });
    return tempArr;
  }

// TESTS
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].