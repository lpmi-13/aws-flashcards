#!/bin/bash

aws lambda list-functions | jq '.Functions | .[] ' | jq '{name: .FunctionName, description: .Description}' > data/lambdas.json

