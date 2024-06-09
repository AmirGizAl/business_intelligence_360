const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/business_intelligence_360/' // Замените на путь, по которому ваше приложение будет доступно в браузере
      : '/',
  transpileDependencies: true
}

