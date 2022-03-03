// webpack配置
const isDev = process.env.NODE_ENV === 'DEV' || process.env.NODE_ENV === 'development'
const baseConfig = {
    publicPath: isDev ? '/' : './',
    css: {
        // Enable CSS source maps.
        sourceMap: isDev,
        loaderOptions: {
            scss: {
                prependData: '@import "~@src/styles/variable.scss";'
            }
        }
    },
    configureWebpack: config => {
        console.log('configureWebpack', config)
    },
    chainWebpack: config => {
        console.log('chainWebpack', config)
    }
}

const config = Object.assign({}, baseConfig)
module.exports = config
