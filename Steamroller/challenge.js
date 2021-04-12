function steamrollArray(arr) {
    let newArr = [...arr];
    while (newArr.some(el => Array.isArray(el))) {
      newArr = newArr.reduce((acc, curr) => {
        console.log(acc, curr);
        return (acc.concat(curr));
      }, []);                
    }  
    return newArr;
  }

// TESTS
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.