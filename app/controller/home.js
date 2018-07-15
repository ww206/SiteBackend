'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // console.log(this.ctx.body);

    this.ctx.body = 'hello world';

  }
}

module.exports = HomeController;
