#!/bin/bash

aws lambda list-functions | jq '{"Functions" : [.Functions[] | del(.Environment, .TracingConfig, .Role, .RevisionId, .PackageType, .CodeSha256, .FunctionArn, .LastModified)]}' > data/lambdas.json

