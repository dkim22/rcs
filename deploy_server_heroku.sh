#! /bin/bash
yarn build:server
heroku container:push --app=radiant-citadel-01201 web
heroku container:release --app=radiant-citadel-01201 web
