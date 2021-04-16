const {execSync} = require('child_process');
let branch = 'master';

// Get the Current Branch.
branch = execSync('git branch --show-current', {encoding: 'utf8'});

// Try deleting the styleguide if it exists. (cache)
execSync('rm -Rf ./styleguide');

// Clone fresh.
execSync('git clone https://github.com/su-sws/decanter-web.git styleguide');

// Add this branch as a dependency.
execSync('cd styleguide && npm install "https://github.com/su-sws/decanter.git#' + branch + '" --save --force');

// Install.
execSync('cd styleguide && npm install');

// Build the styleguide.
execSync('cd styleguide && npm run export');

// Boom shakalaka.
console.log('All Done');
