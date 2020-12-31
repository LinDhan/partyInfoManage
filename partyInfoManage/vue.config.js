
module.exports = {
  devServer: {
    proxy: { // 设置代理
      '/api': {
        // target: 'http://192.168.43.26:3000', // 地址是公司地址 请求的目标服务器接口.不能用localhost
        target: 'http://192.168.43.57:3000', // 地址是私人WiFi请求的目标服务器接口.不能用localhost
        changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { // 重写请求
          '^/api': '/api' // 替换target中的请求地址，也就是说在请求http://192.168.1.11:3000/api这个地址的时候直接写成/api即可。
        }
      }
    }
  },
  // publicPath: './', // 部署应用包时的基本url，这样所有的资源都会被链接为相对路径
  pages: {
    index: {
      entry: 'src/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },

    mobile: {
      entry: 'src/mobile/mobile.js',
      template: 'public/mobile.html',
      filename: 'mobile.html',
      title: 'Mobile Page',
      chunks: ['chunk-vendors', 'chunk-common', 'mobile']
    }
  }

}
