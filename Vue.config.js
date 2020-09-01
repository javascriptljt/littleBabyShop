module.exports = {
    devServer: {
        proxy: {
            //配置跨域
            '/ajax': {
                target: 'http://www.pudge.wang:3001/',
                ws:true,
                changOrigin:true
            }
        }
    }
  }