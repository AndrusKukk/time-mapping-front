module.exports = {
    devServer: {
        proxy: {
            '/public': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }
    }
}