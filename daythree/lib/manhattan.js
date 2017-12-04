const coords = (n) => {
  const k = Math.ceil((Math.sqrt(n) - 1) / 2);
  var t = 2 * k + 1;
  var m = t * t;

  t -= 1;

  if (n > m - t) {
    return [k - (m - n), -1 * k];
  } else {
    m -= t;
  }

  if (n > m -t) {
    return [ -1 * k, -1 * k + (m- n)];
  } else {
    m -= t;
  }

  if (n > m - t) {
    return [-1 * k + (m - n), k];
  } else {
    return [k, k - (m - n - t)];
  }

  throw new Error("Cannot compute location");
};

const distance = (value) => {
  const c = coords(value);
  return Math.abs(c[0]) + Math.abs(c[1]);
};

module.exports = {
  coords,
  distance
};
