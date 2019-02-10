chainWebpack: (config) => {
    config.plugins.delete('prefetch')
}