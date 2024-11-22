#! /usr/bin/env node
const yargs = require('yargs')
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const fs = require('node:fs');



const text = '';

const options = yargs.usage('Create a grid selections')
  .option("x", {alias: "axis x", describe: "Axis X, default is 8", type: "string", demandOption: false})
  .option("y", {alias: "axis y", describe: "Axis Y, default is 16", type: "string", demandOption: false})
  .help(true)
  .argv;

console.log(argv.x, argv.y);

const {x = 8, y = 16} = argv;

const content = `\
export const axisX = ${x};
export const axisY = ${y};`;

fs.writeFile('axes.js', content, err => {
  if (err) {
    console.error(err);
  }
});

