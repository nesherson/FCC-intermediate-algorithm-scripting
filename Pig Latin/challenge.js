const vowels = ['a', 'e', 'i', 'o', 'u'];

const isVowel = (char) => {
  return vowels.includes(char);
}

const extractConsonants = (string) => {
  const tempStr = string.split('');
  
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
    
  const newStr = str.slice(consonants.length) + consonants.join('') + 'ay';
  return newStr;
  } else {
    return str + 'way';
  }
}

// TESTS
// translatePigLatin("california") should return the string aliforniacay.
// translatePigLatin("paragraphs") should return the string aragraphspay.
// translatePigLatin("glove") should return the string oveglay.
// translatePigLatin("algorithm") should return the string algorithmway.
// translatePigLatin("eight") should return the string eightway.
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
// Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.