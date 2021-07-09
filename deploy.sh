#/bin/sh

## Usage ./deploy.sh to deploy all/config and ./deploy [function-name] to deploy a specific function (faster) 

# "sls" is an alias for "serverless"

if [ $# -eq 0 ]; then
    sls deploy --aws-profile personal
else
    sls deploy function --aws-profile personal -f $@
fi