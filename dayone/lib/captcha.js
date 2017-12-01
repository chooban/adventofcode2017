const splitNumber = (num) => {
  var digits = [];
  while (num > 0) {
    digits[digits.length] = num % 10;
    num = parseInt(num / 10);
  }

  digits.reverse();
  return digits;
};

const solve = (captcha) => {
  const reducer = (acc, curr, idx, array) =>
    (curr == array[(idx + 1) - (idx == array.length - 1 ? array.length : 0)])
      ? acc + curr
      : acc;

  return splitNumber(+captcha).reduce(reducer, 0);
};

const solvePartTwo = (captcha) => {
  const sequence = splitNumber(+captcha);
  const increment = sequence.length >> 1;

  const reducer = (acc, curr, idx, array) => {
    const compIdx = idx + (array.length >> 1);

    return (curr == array[compIdx - (compIdx >= array.length ? array.length : 0)])
      ? acc += curr
      : acc;
  };

  return sequence.reduce(reducer, 0);
};

module.exports = {
  partone: solve,
  parttwo: solvePartTwo
};
