const PXToVW = require('postcss-px-to-viewport');

// webpack配置
const isDev = process.env.NODE_ENV === 'DEV' || process.env.NODE_ENV === 'development';
const baseConfig = {
    lintOnSave: false,
    publicPath: isDev ? '/' : './',
    devServer: {
        open: true,
        port: 8080,
        https: false,
        proxy: {
            '/': {
                target: 'http://merchants.zhenye.com:91',
                ws: true,
                changeOrigin: true,
                // pathReWrite: {
                //     '^/': ''
                // }
            }
        }
    },
    css: {
        // Enable CSS source maps.
        sourceMap: isDev,
        loaderOptions: {
            scss: {
                prependData: '@import "~@src/styles/variable.scss";'
            },
            postcss: {
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                    new PXToVW({
                        unitToConvert: 'px',
                        viewportWidth: 375,
                        unitPrecision: 5,
                        propList: ['*'],
                        viewportUnit: 'vw',
                        fontViewportUnit: 'vw',
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: false,
                        exclude: [/node_modules/]
                    })
                ]
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

const config = {...baseConfig};
module.exports = config
