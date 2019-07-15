'use strict';

var lodash = require('lodash');
var path = require('path');

let config = {
  'viewDir': path.join(__dirname, '..', 'views'),
  'staticDir': path.join(__dirname, '..', 'assets'),
  'baseUrl': 'http://localhost:801/yii-basic-app-2.0.21/web/index.php?r='
};
{
  const prodConfig = {
    port: 80
  };
  config = lodash.extend(config, prodConfig);
}

var config$1 = config;

module.exports = config$1;
