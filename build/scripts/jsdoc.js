const fs = require('fs')
const path = require('path');
const { exec } = require('child_process');

/**
 * Attempts to find the relative location to the JSDoc Bin.
 * @return {[type]} [description]
 */
function lookupJSDOCBin() {
  var i, binPath, paths;
  var nodePath = process.env.NODE_PATH || '';

  //check first the base path into the cwd
  paths = [
    __dirname + '/../../node_modules/.bin/jsdoc',
    __dirname + '/../../node_modules/jsdoc/jsdoc.js',
    __dirname + '/../../../jsdoc/jsdoc.js'
  ];

  // Fall back on global if not found at the usual location.
  nodePath.split(path.delimiter).forEach(function(p) {
    if (!/\/$/.test(p)) {
      p += '/';
    }
    paths.push(p + '/jsdoc/jsdoc.js');
  });

  for (i in paths) {
    binPath = path.resolve(paths[i]);
    if (fs.existsSync(binPath)) {
      return binPath;
    }
  }

  return;
}

////
//// EXECUTE
////

let jsdoc = lookupJSDOCBin();
exec(jsdoc + ' -c ./build/scripts/jsdoc.json', (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  }
  else {
   // The *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
  }
});
