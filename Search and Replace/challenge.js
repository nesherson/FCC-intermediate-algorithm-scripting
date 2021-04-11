function myReplace(str, before, after) {
  const splitStr = str.split(' ');
  const newStr = splitStr.map((word) => {
    if (word.toLowerCase() === before.toLowerCase()) {
      if (word[0] === word[0].toUpperCase()) {
        const tempAfter = after.replace(after[0], after[0].toUpperCase());
        return tempAfter;
      } else {
        return after.toLowerCase();
      }
    } else {
      return word;
    }
  });

  return newStr.join(' ');
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
