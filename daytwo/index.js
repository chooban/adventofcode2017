const fs = require('fs');

const checksum = require('./lib/checksum');

const argv = require('yargs')
  .alias('s', 'sheet')
  .demandOption('s')
  .argv;

const sheet = fs.readFileSync(argv.sheet, 'utf8')
  .trim()
  .split('\n')
  .map(a => a.split('\t').map(Number));

console.log("Checksum is " + checksum.checksheet(sheet));
console.log("Second checksum is " + checksum.divisorSheet(sheet));
