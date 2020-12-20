#!/usr/bin/env bash

set -e

deploy() {
    curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
    heroku auth:token
    heroku container:login
    heroku container:push react-webapp --app ${HEROKU_APP_NAME}
    heroku container:release react-webapp --app ${HEROKU_APP_NAME}
    heroku logs --app ${HEROKU_APP_NAME}
}

if [[ $1 = 'deploy' ]]; then
    deploy
else
    echo "Usage: ./deploy.sh (deploy)"
    exit 2
fi
