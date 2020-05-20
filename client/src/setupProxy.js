const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/auth/git', createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
    }));
    app.use('/api/*', createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
    }));
}