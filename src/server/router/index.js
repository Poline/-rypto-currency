const router = require('koa-router')();
const main = require('./main');

router.use('/api/crypto', main.routes())
module.exports = router;
