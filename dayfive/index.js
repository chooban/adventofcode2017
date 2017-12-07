const fs = require('fs');

const offset = require('./lib/offsets');

const argv = require('yargs')
  .alias('i', 'input')
  .demandOption('i')
  .argv;

const input = fs.readFileSync(argv.input, 'utf8')
  .trim()
  .split('\n')
  .map(Number);

console.log(offset.countUntilExit(input));
