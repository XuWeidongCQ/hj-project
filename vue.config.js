const webpack = require("webpack");

module.exports = {
  publicPath: './',//重要，打包使用的
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/'
  //   : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
};