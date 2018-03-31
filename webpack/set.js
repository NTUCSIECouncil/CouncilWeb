module.exports = app => {
    const mode = process.env.NODE_ENV;

    /* istanbul ignore if */
    if ( mode === 'development' ) {
        var webpack = require('webpack');
        var webpackDevMiddleware = require('webpack-dev-middleware');
        var webpackHotMiddleware = require('webpack-hot-middleware');

        var config = require('./webpack.dev');
        let compiler = webpack(config);

        app.use(webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
            stats: { colors: true },
        }));
    
        app.use(webpackHotMiddleware(compiler));
    }

    return app;
};