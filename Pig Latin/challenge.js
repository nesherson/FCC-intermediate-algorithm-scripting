const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = (char) => {
  return vowels.includes(char);
}

const extractConsonants = (string) => {
  const tempStr = string.split('');
  if (!tempStr.some(letter => isVowel(letter))) {
    return null;
  }
  
  
  
  const consonants = [];
  
  for (let i = 0; i < string.length; i++) {
    if (!isVowel(tempStr[i])) {
      consonants.push(tempStr[i]);
    } else {
      break;
    }
  }
  return consonants;
}

function translatePigLatin(str) {
  const firstLetter = str[0];
  if (!isVowel(firstLetter)) {
    
  const consonants = extractConsonants(str);
    if (consonants === null) {
      return str + 'ay';
    }
  const newStr = str.slice(consonants.length) + consonants.join('') + 'ay';
  return newStr;
  } else {
    return str + 'way';
  }
}

translatePigLatin("consonant");