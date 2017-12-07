const root = (programs) => {
  const lines = programs.trim().split('\n');
  const splitlines = lines.map(e => e.split(' '));

  const leaves = splitlines.map(e => {
    return {
      program: e[0],
      weight: Number(/([0-9]+)/.exec(e[1])[1]),
      blocking: e.slice(3).map(e => e.split(',')[0])
    };
  });

  const nodeNames = leaves.map(e => e.program);

  const foundNode = nodeNames.find(n => {
    let foundParent = false;

    for (var i = 0; i < leaves.length; i++) {
      if (leaves[i].blocking.some(c => c === n)) {
        foundParent = true;
      }
    }
    return !foundParent;
  });
  return foundNode;
};

module.exports = {
  root
};
