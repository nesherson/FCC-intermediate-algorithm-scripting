const basePairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

function pairElement(str) {
  const splitStr = str.split('');
  const pairs = splitStr.map((el) => {
    const pair = [el, basePairs[el]];
    return pair;
  });
  return pairs;
}

// TESTS
// pairElement('GCG');
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
