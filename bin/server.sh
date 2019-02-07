#!/usr/bin/env bash
# Starts the server
echo "Starting server..."
DEBUG=*,-babel*,-send*,-express* nodemon ./node_modules/.bin/babel-node src/server/server.js
