const Koa = require('koa');
const logger = require('koa-morgan');
const router = require('./router');
const config = require('./config');
global.Promise = require('bluebird');

const server = new Koa();

server.use(router.routes());
server.use(logger('tiny'));