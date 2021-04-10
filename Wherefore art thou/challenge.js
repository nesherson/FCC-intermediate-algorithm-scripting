function compare(obj1, obj2) {
  const tempObj1 = Object.entries(obj1);
  const tempObj2 = Object.entries(obj2);

  const contains = tempObj2.every((item) => {
    const key = item[0];
    const value = item[1];

    const found = tempObj1.find(
      (el) => el.includes(key) && el.indexOf(value) !== -1
    );

    if (typeof found !== 'undefined') {
      return true;
    } else {
      return false;
    }
  });
  return contains;
}

function whatIsInAName(collection, source) {
  let arr = [];

  arr = collection.filter((item) => compare(item, source));

  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);
