const PXToVW = require('postcss-px-to-viewport');
const path = require("path")
const resolve = (dir) => path.join(__dirname, dir);

// webpack配置
const isDev = process.env.NODE_ENV === 'DEV' || process.env.NODE_ENV === 'development';
const baseConfig = {
    lintOnSave: false,
    publicPath: isDev ? '/' : './',
    devServer: {
        open: true,
        port: 8080,
        proxy: {
            '/': {
                target: 'https://rental.test.myspacex.cn/',
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
                // prependData: '@import "~@src/styles/variable.scss";'
            },
            postcss: {
                plugins: [
                    require('@tailwindcss/postcss7-compat'),
                    require('autoprefixer'),
                    new PXToVW({
                        unitToConvert: 'px',
                        viewportWidth: 750,
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
        console.log('chainWebpack', config);

        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('postcss-style-px-to-viewport')
            .loader('postcss-style-px-to-viewport')
            .options({
                viewportWidth: 750 // 此处的viewportWidth 需与 PXToVW 方法中的保持一致
            })

        config.resolve.alias
            .set("@api", resolve("./src/api"))
            .set("@asset", resolve("./src/assets"))
            .set("@constants", resolve("./src/constants"))
            .set("@components", resolve("./src/components"))
            .set("@plugins", resolve("./src/plugins"))
            .set("@router", resolve("./src/router"))
            .set("@styles", resolve("./src/styles"))
            .set("@utils", resolve("./src/utils"));

    }
}

const config = {...baseConfig};
module.exports = config
