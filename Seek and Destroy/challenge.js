function destroyer(arr) {
  const args = [];
  for (const arg in arguments) {
    if (arg !== '0') {
      args.push(arguments[arg]);
    }
  }

  const newArr = arr.filter((el) => {
    return !args.some((arg) => arg === el);
  });

  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
