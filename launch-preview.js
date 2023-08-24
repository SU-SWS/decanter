const {execSync} = require('child_process');
let branch = 'master';

// Get the Current Branch.
branch = execSync('git branch --show-current', {encoding: 'utf8'}).toString().trim();
console.log('Current Branch:', branch);

// Try deleting the styleguide if it exists. (cache)
console.log('Starting...');
execSync('rm -Rf ./styleguide');

// Clone fresh.
console.log('Cloning...');
execSync('git clone -b task/package-updates https://github.com/su-sws/decanter-web.git styleguide');

// Change to the testing branch.
console.log('Checking out...');
execSync('cd styleguide && git checkout task/package-updates');

// Add this branch as a dependency.
console.log('Adding dependency...');
console.log('Running', `npm install github:SU-SWS/decanter# + ${branch}`);
execSync('cd styleguide && npm install github:SU-SWS/decanter#' + branch);

// Install.
console.log('Installing...');
execSync('cd styleguide && npm install');

// Build the styleguide.
console.log('Building...');
execSync('cd styleguide && npm run export');

// Boom shakalaka.
console.log('All Done');
