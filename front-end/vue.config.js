const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/server-side': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
    }
  }
})
