"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SafeRequest = _interopRequireDefault(require("../untils/SafeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview 实现 Books 数据模型
 * @author tangye@2278331650@qq.com
 */
class Books {
  /**
   * Books类 获取后台有关图书相关的数据
   * @class
   */

  /**
   * @constructor
   * @param {object} app Ko2执行的上下文
   */
  constructor(app) {
    this.app = app;
  }
  /**
   * 获取后台的全部列表
   * @param {*} options 配置项
   * 
   * @example
   * return new Promise
   * getData(options)
   */


  getData(options) {
    const safeRequest = new _SafeRequest.default(options.url, this.app);
    return safeRequest.fetch();
  }

}

var _default = Books;
exports.default = _default;