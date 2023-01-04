const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/login", "/me"], {
      target: "http://localhost:9000",
      changeOrigin: true,
    })
  );
};
