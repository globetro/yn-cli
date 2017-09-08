#! /usr/bin/env node
const readline = require('readline');

module.exports = function(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question((prompt || 'Are you sure? [y/N]') + ' ', (answer) => {
    rl.close();
    if (answer === 'y' || answer === 'Y' || answer === 'yes') {
      process.exit(0);
    }
    else {
      process.exit(1);
    }
  });
}