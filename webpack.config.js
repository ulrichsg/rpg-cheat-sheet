module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: './web/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: ['es2015', 'react'] }
            }
        ]
    }
};
