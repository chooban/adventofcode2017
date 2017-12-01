const captcha = require('./lib/captcha');
const argv = require('yargs')
  .alias('c', 'captcha')
  .demandOption(['c'])
  .argv;


console.log("Part one: " + captcha.partone(argv.captcha));
console.log("Part two: " + captcha.parttwo(argv.captcha));

