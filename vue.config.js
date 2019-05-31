module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://acss311.herokuapp.com',
                
                changeOrigin: true,
                secure:false,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}