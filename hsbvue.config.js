const path = require('path');
const package = require('./package.json')

module.exports = {
  mode: 'spa',
  head: {
    title: '回收宝',
    meta: {
      keywords: '手机回收,二手手机回收,平板回收,二手手机交易网',
      description: '回收宝是国内领先的二手手机数码回收平台，专注于手机回收、二手手机回收、平板回收的线上回收平台，可以在二手手机交易网快速估价，支持全国范围内手机快递回收，为用户提供安全、便捷、贴心的服务。',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  extra: {
    usePx2rem: true, // 是否启用px2rem
    usePostCSS: true, // 是否启用postCss
    useExtractCSS: true, // 是否抽离css
  },
  webpack(config, { dev }) {
    // 自定义webpack配置
    config.resolve  = {
      ...config.resolve,
      alias: {
        '@': path.resolve(__dirname, process.env.WORKSPACE, 'src'),
      }
    };

    if (dev) {
      // 开发环境专项配置
      config.devServer = {
        ...config.devServer,
        proxy: {},
        open: false
      }
    } else {
      config.output = {
        ...config.output,
        publicPath: `//s1.huishoubao.com/${package.deployName}/dist/`
      }
    }
    return config;
  },
  // 打包文件分析
  analyzer: false
}
