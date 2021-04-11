function uniteUnique(...arr) {
    let tempArr = arr.flat();
    tempArr = tempArr.filter((el, i, arr) => {
      return arr.indexOf(el) === i;
    });
    return tempArr;
  }

  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);