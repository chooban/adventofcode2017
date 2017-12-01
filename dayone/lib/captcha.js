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

module.exports = solve;
