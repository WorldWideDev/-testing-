module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/webpacked_code'
    },
    module:{
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}
