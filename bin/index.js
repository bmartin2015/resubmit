#!/usr/bin/env node

const program = require('commander');

const getLeads = require('../lib/get_leads.js');

/**************************************/

// get leads
// resubmit get <file-name> <api-key>
program
  .command('get <file-name> <api-key>')
  .description('Get lead information')
  .action((fileName, apiKey) => {
    getLeads(fileName, apiKey);
  });

program.parse(process.argv);