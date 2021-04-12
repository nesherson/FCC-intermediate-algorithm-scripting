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
  
  steamrollArray([1, [2], [3, [[4]]]]);  