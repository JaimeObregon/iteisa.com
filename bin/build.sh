#!/bin/bash

yarn install || exit 1
bin/build.js > httpdocs/modules/version.js || exit 2
