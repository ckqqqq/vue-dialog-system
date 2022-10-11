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
    devServer: {
      // 项目运行时候的端口号
      port: 5010
    }
  }
  
  