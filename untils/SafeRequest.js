"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../config");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SafeRequrest {
  constructor(url, app) {
    this.url = url;
    this.baseUrl = _config.baseUrl;
    this.app = app;
  }

  fetch() {
    let result = {
      code: 0,
      message: '',
      data: []
    };
    return new Promise((resolve, reject) => {
      let tyfetch = (0, _nodeFetch.default)(this.baseUrl + this.url);
      tyfetch.then(res => res.json()).then(json => {
        result.data = json;
        resolve(result);
      }).catch(err => {
        this.app.logger.error(err);
        result.code = 1;
        result.message = 'fetch请求数据失败';
        reject(result);
      });
    });
  }

}

var _default = SafeRequrest;
exports.default = _default;