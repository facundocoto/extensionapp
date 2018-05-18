const path = require('path');

module.exports = {
    entry: path.join(process.cwd(), './a.module.ts'),
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'externalapp.module.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    externals: [
        function (context, request, callback) {
            if (/^@angular/.test(request)) {
                return callback(null, 'commonjs ' + request);
            }
            callback();
        }
    ]
};