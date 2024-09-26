const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const fs = require('fs');

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

  // Add CNAME file during build process for GitHub Pages
  configureWebpack: {
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.done.tap('Create CNAME', () => {
            const outputPath = path.join(__dirname, 'dist', 'CNAME');
            fs.writeFileSync(outputPath, 'ericemanuel.ee');
          });
        },
      },
    ],
  },
});
