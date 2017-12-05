const check = (password) => {
  const counts = Object.values(
      password
        .split(' ')
        .map(a => a.split('').sort().join())
        .reduce((acc, curr) => {
          acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
          return acc;
        }, {})
  );

  return !!!counts.find(e => e > 1);
};

module.exports = {
  check
}
