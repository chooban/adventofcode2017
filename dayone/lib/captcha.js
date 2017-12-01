const solve = (captcha) => {
  const strInput = '' + captcha;
  const sequence = strInput + strInput[0];
  const reducer = (acc, curr, idx, array) => {
    if (curr == array[idx + 1]) {
      acc += curr;
    }
    return acc;
  };

  return sequence
    .split('')
    .map((a) => +a)
    .reduce(reducer, 0);
};

const solvePartTwo = (captcha) => {
  const increment = ('' + captcha).length / 2;
  const reducer = (acc, curr, idx, array) => {
    const compIdx = idx + increment;
    if (compIdx >= array.length) {
      if (curr == array[(compIdx - array.length)]) {
        acc += curr;
      }
    } else {
      if (curr == array[compIdx]) {
        acc += curr;
      }
    }
    return acc;
  };

  return ('' + captcha)
    .split('')
    .map(a => +a)
    .reduce(reducer, 0);
};

module.exports = {
  partone: solve,
  parttwo: solvePartTwo
};
