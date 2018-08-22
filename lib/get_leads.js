const fs = require('fs');
const path = require('path');
const axios = require('axios');

let responses = [];

//const leadApi = require('./lead_api.js')

// Validate that a variable, var, exists.
const validate = (variable, name) => {
  if (!variable || variable.length === 0) {
    console.error(`${name} must not be blank`);
    process.exit(1)
  }
}

const getLeadInfo = (leadId, apiKey) => {
  return axios({
    method: 'get',
    url: `https://next.leadconduit.com/events?type=source&lead_id=${leadId}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/vnd.com.leadconduit.event+json',
    },
    auth: {
      username: 'x',
      password: apiKey
    }
  })
    .then((response) => {
      setLeadData(response);
    })
    .catch((error) => {
      setLeadData(error);
    })
}

const setLeadData = (response) => {
  responses.push(response);
}

module.exports = (fileName, apiKey) => {
  validate(fileName, "File name");
  validate(apiKey, "API key");
  try {
    text = fs.readFileSync(path.join(process.cwd(), fileName)).toString('utf-8').split('\n');
  } catch (err) {
    console.error(`File not found: ${err}`);
    process.exit(1)
  }

  let leadOutput = [];
  let resubmitCurl = [];
  let leadData = [];

  console.log(`Generating lead_output.sh`);
  text.forEach((leadId) => {
    if (leadId) {
      leadOutput.push(`curl -X GET -H 'Accept: application/json' -uX:${apiKey} "https://next.leadconduit.com/events?type=source&lead_id=${leadId}" | jq '.[] | .request.uri, .request.body' -c >> resubmit_curl.sh\n`);
      //leadData.push(getLeadInfo(leadId, apiKey));
    }
  })
  console.log("Writing lead_output.sh...");
  fs.writeFile("lead_output.sh", leadOutput.join(''), (err) => {
    if(err) {
      return console.error(err);
    }
    console.log("lead_output.sh was saved");
  });

  //console.log(responses);

}