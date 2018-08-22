# resubmit

This is a script to take a list of [LeadConduit](https://activeprospect.com/products/leadconduit/) lead ids and convert them into into a shell script to query the [LeadConduit API](https://docs.activeprospect.com/leadconduit/) to build resubmit tools.

## Installation

This assumes you have [jq](https://stedolan.github.io/jq/) installed.

First, clone the Github repo:

`git clone https://github.com/bmartin2015/resubmit.git`

From within the resubmit directory, install globally:

`npm install -g ./`

To uninstall, run `npm uninstall -g resubmit`

## Usage

Usage is: `resubmit get <file-name> <api-key>`

`$ resubmit get my_leads.txt 4p1_k3y
Generating lead_output.sh
Writing lead_output.sh...
lead_output.sh was saved`

### Inpute File

The input file should be a list of [LeadConduit lead ids](https://docs.activeprospect.com/leadconduit/reference.html#bson-id), one per line:

843413531415987394157
135138475948759387495
135138475948759387495
135138475948759387495

### API Key

Your API key is used to authenticate all calls to the API. This key is private. Treat it like a password. Only give it out to people you trust. Your API key works with all ActiveProspect products to which you are subscribed. You can retrieve your API key via the ActiveProspect ID [account settings](https://sso.activeprospect.com/account).

### Output

`lead_output.sh` will containe a CURL command formatted to query the LeadConduit api

`curl -X GET -H 'Accept: application/json' -uX:123 "https://next.leadconduit.com/events?type=source&lead_id=2343243jhfdafd" | jq '.[] | .request.uri, .request.body' -c >> resubmit_curl.sh`

## TODO:
* Query the API automatically and build the resubmit script
* Resubmit leads to LeadConduit


