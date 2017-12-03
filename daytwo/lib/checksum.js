const checkrow = (row) => {
  const vals = row
    .sort((a,b) => a - b);

  return vals[vals.length - 1] - vals[0];
};

const checksheet = (sheet) =>
  sheet
    .map(checkrow)
    .reduce((acc, cur) => acc += cur, 0);

const divisorRow = (row) => {
  for (var i = 0; i < row.length; i++) {
    const compare = row.slice(0);
    compare.splice(i, 1);

    const divisor = compare.find(f => row[i] % f == 0);

    if (divisor) {
      return row[i] / divisor;
    }
  }
  throw new Error("Divisor not found");
};

const divisorSheet = (sheet) => {
  return sheet
    .map(divisorRow)
    .reduce((acc, cur) => acc += cur, 0);
};

module.exports = {
  checkrow,
  checksheet,
  divisorRow,
  divisorSheet
};
