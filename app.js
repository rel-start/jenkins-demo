"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _co = require("co");

var _controllers = _interopRequireDefault(require("./controllers"));

var _log4js = require("log4js");

var _errorHandler = _interopRequireDefault(require("./middlewares/errorHandler"));

var _config = _interopRequireDefault(require("./config"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
(0, _log4js.configure)({
  appenders: {
    cheese: {
      type: 'file',
      filename: _path.default.join(__dirname, '/log4/cheese.log')
    }
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'error'
    }
  }
});
app.use((0, _koaStatic.default)(_config.default.staticDir));
app.context.logger = (0, _log4js.getLogger)('cheese');
app.context.render = (0, _co.wrap)((0, _koaSwig.default)({
  root: _config.default.viewDir,
  autoescape: true,
  cache: 'memory',
  // disable, set to false
  varControls: ["[[", "]]"],
  // 模板代码块格式
  ext: 'html',
  writeBody: false
}));

_errorHandler.default.error(app);

(0, _controllers.default)(app);
app.listen(_config.default.port, () => {
  console.log(`${_config.default.port}端口 启动成功`);
});