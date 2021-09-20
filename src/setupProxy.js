const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    })
  );
  app.use(
    '/hls',
    createProxyMiddleware({
      target: 'http://localhost/hls',
      changeOrigin: true,
      pathRewrite: {
        "^/hls": "/"
      }
    })
  )
  app.use(
    '/penpencil',
    createProxyMiddleware({
      target: 'https://api.penpencil.xyz',
      changeOrigin: true,
      pathRewrite: {
        "^/penpencil": "/"
      }
    })
  );
};