const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                import: [
                    '~@/common/stylus/variable.styl',
                    '~@/common/stylus/mixin.styl'
                ]
            }
        }
    },
    chainWebpack (config) {
        // svg
        config.module.rule('svg').uses.clear()
        config.module
            .rule('svg1')
            .test(/\.svg$/)
            .use('svg-sprite')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
            .include
            .add(resolve('src/assets/icons/svg'))
            .end()
        // 别名
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
            .set('pages', resolve('src/pages'))
            .set('assets', resolve('src/assets'))
            .set('api', resolve('src/api'))
    },
    productionSourceMap: false,
    devServer: {
        // 代理
        // proxy: {
        //     '/api': {
        //         target: '<url>',
        //         changeOrigin: true
        //     }
        // },
        // 测试mock数据
        // before (app) {
        // }
    },
    assetsDir: 'static',
    outputDir: process.env.VUE_APP_OUTPUT_DIR
}
