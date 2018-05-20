const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');


router.get('/crypto', bodyParser(), async ctx => {
  try {
   
  } catch (e) {
    ctx.status = 401;
    ctx.body = e.message;
  }
});

module.exports = router;
