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

pairElement('GCG');
