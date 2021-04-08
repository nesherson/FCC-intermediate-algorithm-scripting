function hasDuplicate(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[i] === arr[j] && arr[i] === num) {
        return true;
      }
    }
  }
  return false;
}

function diffArray(arr1, arr2) {
  const con = arr1.concat(arr2);
  con.sort((a, b) => a - b);
  const newArr = con.filter((num) => !hasDuplicate(con, num));

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
