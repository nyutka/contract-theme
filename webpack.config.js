var path = require('path');
var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var main_js = "[name].js";
var main_css = "[name].css";
var vendor_js = "vendor.js";
var basePath = "/static/themes/skeletal/build/";

if (process.env.WEBPACK_ENV === "production") {
    main_js = "[name].[chunkhash].js";
    main_css = "[name].[chunkhash].css";
    vendor_js = "vendor.[chunkhash].js";
}

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, 'app/js'),
    entry: {
        main: "./scripts.js",
        vendor: [
            "jquery",
            "underscore",
            "moment",
            "bootstrap",
            "mapbox"
        ]
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, "node_modules/jquery/dist/jquery.js"),
            underscore: path.join(__dirname, "node_modules/underscore/underscore.js"),
            moment: path.join(__dirname, "node_modules/moment/moment.js"),
            bootstrap: path.join(__dirname, "node_modules/bootstrap/dist/js/bootstrap.js"),
            bootstrap_css: path.join(__dirname, "node_modules/bootstrap/dist/css/bootstrap.css"),
            mapbox: path.join(__dirname, "node_modules/mapbox.js"),
            mapbox_css: path.join(__dirname, "node_modules/mapbox.js/theme/style.css")
        },
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: "url?name=images/[hash].[ext],limit=1000"
            },
            {
                test: /\.json$/i,
                loader: "json"
            },
            {
                test: /\.html$/i,
                loader: "raw"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?name=fonts/[hash].[ext],limit=1000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot)$/,
                loader: "file-loader?name=fonts/[hash].[ext]"
            }
        ]
    },
    output: {
        publicPath: basePath,
        path: __dirname + "/build",
        filename: main_js
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery",
            _: "underscore"
        }),
        new webpack.optimize.CommonsChunkPlugin("vendor", vendor_js),
        new ExtractTextPlugin(main_css, {
            allChunks: true
        }),
        new ManifestPlugin({
            basePath: basePath
        }),
        new ChunkManifestPlugin({
            manifestVariable: "webpackManifest"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
