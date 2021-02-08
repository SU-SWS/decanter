const {exec} = require('child_process');
let branch = 'master';

exec('rm -Rf ./styleguide');
exec('git clone https://github.com/su-sws/decanter-web.git styleguide');
exec('git branch --show-current', function (error, stdout, stderr) {
  branch = stdout;
});
exec('cd styleguide');
exec('rm package-lock.json');
exec('nvm use && nvm install');
exec('npm install "https://github.com/su-sws/decanter.git#' + branch + '" --save --force');
exec('npm run export');
