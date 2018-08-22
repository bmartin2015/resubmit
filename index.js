#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const 

let file, api;

program
  .command('build-output <file-name> <api-key>')
  .alias('bo')
  .description('Build output_leads.sh')
  .action((fileName, apiKey) => {
    file = fileName;
    api = apiKey;

  })
  .parse(process.argv);