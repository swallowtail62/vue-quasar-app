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
        `
      }
    }
  },
  transpileDependencies: [/[\\/]node_modules[\\/]quasar[\\/]/]
};
