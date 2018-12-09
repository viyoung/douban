module.exports = `
doctype html
html
   head
     meta(chartset='utf-8')
     meta(name='virwport',content='width=device-width,initial-scale=1')
     title koa server pug
   body
     .container
      h1 hi #{you}
      p this is #{me}
      p 测试动态pug模板引擎
`