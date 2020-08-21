# Test Development Environment.

## Setup

1. Create a file called /dev/src/test.css
2. Create a file called /dev/src/test.js
3. Create or rename sample.test.html to /dev/src/test.html
4. Install all the node dependencies. (`npm install`)
5. Compile the assets for the first time. (`npm run build:dev`)
5. Start up the watch server so it compiles when you change things. (`npm run watch`)
5. Open a new terminal window and fire up the server.
5. Start up the dev server. (`npm run start`)
6. Happy developing.

## Copy & Paste setup.

1. From the root of this repository
```
nvm use
npm install
touch dev/src/test.css
touch dev/src/test.js
cp dev/src/sample.test.html dev/src/test.html
npm run build:dev
npm run watch
```
Open a new terminal window.
```
npm run start
```
