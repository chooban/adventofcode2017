const fs = require('fs');
const readline = require('readline');

const memory = require('./lib/memory');

const argv = require('yargs')
  .alias('i', 'input')
  .demandOption('i')
  .argv;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = fs.readFileSync(argv.input, 'utf8')
  .trim()
  .split('\t')
  .map(Number);

console.log(`Checking ${input}`);

rl.question('Press any key to continue...', () => {
  console.log(memory.reallocate(input));
  rl.close();
  process.stdin.destroy();
});

