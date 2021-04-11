const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

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


function fearNotLetter(str) {
  const splitStr = str.split('');
  const first = splitStr[0];
  const last = splitStr[splitStr.length - 1];
  const tempStr = alphabet.filter(letter => {
    if (letter >= first && letter <= last) {
      return true;
    } else {
      return false;
    }
  });
  
  const tempArr = tempStr.filter(el => !hasDuplicate(splitStr.concat(tempStr), el)).join();
  
  return tempArr === '' ? undefined : tempArr;
}
fearNotLetter("abce");