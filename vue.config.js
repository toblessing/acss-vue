module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://acsstest.herokuapp.com:80',
                
                changeOrigin: true,
                secure:false,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}