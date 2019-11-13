module.exports = {
  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/styles/_normalize.scss";
        `
      }
    }
  },
  transpileDependencies: [/[\\/]node_modules[\\/]quasar[\\/]/]
};
