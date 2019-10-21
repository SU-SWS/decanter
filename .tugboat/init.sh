#!/bin/bash

touch ~/.bashrc

apk add -U curl bash ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils nodejs npm apache2
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash

source ~/.bashrc
httpd

nvm install 10.15.1
npm config delete prefix
npm config set prefix $NVM_DIR/versions/node/v10.15.1
