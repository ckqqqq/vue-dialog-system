module.exports = {
    configureWebpack: {
      resolve: {
      //设置别名
        alias: {
          'components': '@/components',
          'content': 'components/content',
          'common': 'components/common',
          'assets': '@/assets',
          'network': '@/network',
          'views': '@/views',
        }
      }
    },

    devServer:{
      port:5010,
      // https:false,
      open:true,
      //以上的ip和端口是我们本机的;下面为需要跨域的
      proxy:{ //配置跨域
          '/api':{
              target:'http://172.17.0.4:5001',
              // 172.17.0.4
              ws:true,
              changeOrigin:true,//允许跨域
              pathRewrite:{
                  '^/api':''   //请求的时候使用这个api就可以
              }
          }
      }
  }
  }
  
  