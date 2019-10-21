#!/bin/bash

nvm use
npm install
npm run build
npm run styleguide
rm -R node_modules
rm -rf /var/www/localhost/htdocs
ln -snf "${TUGBOAT_ROOT}/styleguide" /var/www/localhost/htdocs
