module.exports = {
  devServer: {
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
