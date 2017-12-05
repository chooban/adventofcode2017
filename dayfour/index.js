const yargs = require('yargs');
const fs = require('fs');

const passwordcheck = require('./lib/passwordcheck');

const argv = require('yargs')
  .alias('i', 'input')
  .demandOption('i')
  .argv;

const passwords = fs.readFileSync(argv.input, 'utf8')
  .trim()
  .split('\n');

const valid = passwords.reduce((acc, curr) => acc += passwordcheck.check(curr) ? 1 : 0, 0);

console.log(`There are ${passwords.length} possible passwords`);
console.log(`There are ${valid} passwords`);
