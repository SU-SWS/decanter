var Hexo = require('hexo');
var path = require("path");

var configFile = path.resolve(__dirname + '/../hexo/_config.yml');
var workingDir = path.resolve(__dirname + '/../hexo');

var hexo = new Hexo(
  workingDir,
  {
    debug: true,
    config: configFile
  }
);

var gen = function() {
  hexo.call('generate').then(function(){
    return hexo.exit();
  }).catch(function(err){
    return hexo.exit(err);
  });
};

hexo.init().then(gen());
