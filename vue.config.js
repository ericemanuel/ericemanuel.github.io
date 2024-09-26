const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  // Add global SCSS configuration
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/system.scss";',
      },
    },
  },

  // Add publicPath for GitHub Pages deployment
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
});
