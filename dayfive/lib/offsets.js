const countUntilExit = (instructions) => {
  const insClone = instructions.slice(0);
  var idx = 0;
  var steps = 0;
  do {
    steps += 1;

    const offset = insClone[idx];
    if (idx + offset >= insClone.length) {
      break;
    }

    if (insClone[idx] >= 3) {
      insClone[idx] -= 1;
    } else {
      insClone[idx] += 1;
    }

    idx += offset;
  } while(true);

  return steps;
};

module.exports = {
  countUntilExit
};
