const fs = require('fs')
const path = require('path');

//
// Expose `plugin`.
module.exports = plugin;

function plugin(opts){
  return function (files, metalsmith, done) {
    setImmediate(done);
    const { exec } = require('child_process');
    let jsdoc = lookup();
    exec(jsdoc + ' -c ./build/jsdoc.json', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
     // the *entire* stdout and stderr (buffered)
     console.log(`stdout: ${stdout}`);
     console.log(`stderr: ${stderr}`);
    }
    });
  };
}

function lookup() {
    var i, binPath, paths;
    var nodePath = process.env.NODE_PATH || '';

    //check first the base path into the cwd
    paths = [
        __dirname + '/../../node_modules/.bin/jsdoc',
        __dirname + '/../../node_modules/jsdoc/jsdoc.js',
        __dirname + '/../../../jsdoc/jsdoc.js'
    ];

    //fall back on global if not found at the usual location
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
