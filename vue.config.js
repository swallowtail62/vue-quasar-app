module.exports = {
  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/styles/_variables.scss";
          @import "~@/styles/_normalize.scss";
        `
      }
    }
  },
  transpileDependencies: [/[\\/]node_modules[\\/]quasar[\\/]/]
};
