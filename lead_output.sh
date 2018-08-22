curl -X GET -H 'Accept: application/json' -uX:123 "https://next.leadconduit.com/events?type=source&lead_id=5b75873865f7f719286dc777" | jq '.[] | .request.uri, .request.body' -c >> resubmit_curl.sh
curl -X GET -H 'Accept: application/json' -uX:123 "https://next.leadconduit.com/events?type=source&lead_id=34135314514" | jq '.[] | .request.uri, .request.body' -c >> resubmit_curl.sh
curl -X GET -H 'Accept: application/json' -uX:123 "https://next.leadconduit.com/events?type=source&lead_id=245j4h;245245" | jq '.[] | .request.uri, .request.body' -c >> resubmit_curl.sh
curl -X GET -H 'Accept: application/json' -uX:123 "https://next.leadconduit.com/events?type=source&lead_id=2343243jhfdafd" | jq '.[] | .request.uri, .request.body' -c >> resubmit_curl.sh
