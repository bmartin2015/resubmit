const axios = require('axios');

// Make a request for the lead information
module.exports = (leadId, apiKey) => {
  let leadInfo = {};

  axios({
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
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    })
}