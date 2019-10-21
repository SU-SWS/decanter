#!/bin/bash

touch ~/.bashrc

apk add -U curl bash ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash

source ~/.bashrc

nvm use
npm install
npm run build
npm run styleguide
rm -R node_modules
rm -rf /var/www/localhost/htdocs
ln -snf "${TUGBOAT_ROOT}/styleguide" /var/www/localhost/htdocs
