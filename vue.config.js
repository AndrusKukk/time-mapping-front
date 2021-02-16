module.exports = {
    devServer: {
        proxy: {
            '/public': {
                target: 'http://localhost:8080',
                changeOrigin: true
            } , '/time': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
