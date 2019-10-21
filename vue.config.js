module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    //port: 8080,
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
