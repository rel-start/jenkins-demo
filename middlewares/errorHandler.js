"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const errorHandler = {
  error(app) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        ctx.logger.error(err);
        ctx.status = err.status || 200;
        ctx.body = '服务器错误';
      }

      app.use(async (ctx, next) => {
        await next();

        if (ctx.status !== 404) {
          return;
        }

        ctx.status = 200;
        ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
      });
    });
  }

};
var _default = errorHandler;
exports.default = _default;