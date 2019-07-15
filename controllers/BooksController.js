"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Books = _interopRequireDefault(require("../models/Books"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksController {
  constructor() {}

  async actionsList(ctx, next) {
    const books = new _Books.default(ctx); // 请求接口

    const result = await books.getData({
      url: 'books/index'
    });
    const {
      booksTitles,
      booksVal
    } = BooksController.getFilterBooks(result.data);
    ctx.body = await ctx.render('books/pages/list', {
      booksTitles,
      booksVal
    });
  } // 用于过滤 Books 数据


  static filterBooksData(data) {
    const arr = [];

    for (let book of data) {
      const o = {};

      for (let [key, val] of Object.entries(book)) {
        if (key == 'booksid' || key == 'isbn' || key == 'create_date') {
          continue;
        }

        o[key] = val;
      }

      arr.push(o);
    }

    return arr;
  } // 得到过滤后 Books 列表


  static getFilterBooks(data) {
    const arr = BooksController.filterBooksData(data);
    const booksVal = [];

    for (let x of arr) {
      booksVal.push(Object.values(x));
    }

    return {
      booksTitles: Object.keys(arr[0]),
      booksVal
    };
  }

}

var _default = BooksController;
exports.default = _default;