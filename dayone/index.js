const captcha = require('./lib/captcha');
const argv = require('yargs')
  .alias('c', 'captcha')
  .demandOption(['c'])
  .argv;

console.log(captcha(argv.captcha));

