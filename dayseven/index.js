const fs = require('fs');

const ps = require('./lib/ps');

const input = fs.readFileSync('input.txt', 'utf8')
  .trim();

console.log(ps.root(input));
