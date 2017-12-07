const reallocate = (banks) => {
  const seenStates = [];

  while (!seenStates.find(e => e === banks.join('-'))) {
    seenStates.push(banks.join('-'));

    let [startIndex, highest] = banks.reduce((acc, val, idx) => {
      if (val > acc[1]) {
        return [idx, val]
      } else {
        return acc;
      }
    }, [-1, -1]);

    banks[startIndex] = 0;

    while (highest--) {
      banks[++startIndex % banks.length]++;
    }
  }

  console.log(`Final configuration: ${banks}`);
  return [
    seenStates.length,
    seenStates.length - seenStates.findIndex(e => e === banks.join('-'))
  ];
};

module.exports = {
  reallocate
};
