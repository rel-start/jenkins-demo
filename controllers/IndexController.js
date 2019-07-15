"use strict";

class IndexController {
  async actionIndex(ctx, next) {
    ctx.body = await ctx.render('books/pages/index', {
      data: 'home page'
    });
  }

}

module.exports = IndexController;