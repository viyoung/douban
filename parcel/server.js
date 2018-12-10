const Koa = require('koa');
const app = new Koa();
const { resolve } = require('path')
const serve = require('koa-static')

app.use(serve(__dirname, './'))
app.use(async(ctx, next) => {
    await ctx.render('index', {
        you: 'luke',
        me: 'scott'
    })
})
app.listen(4466)