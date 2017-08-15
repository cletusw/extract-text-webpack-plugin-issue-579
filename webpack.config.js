const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './public/main.js',
  },
  output: {
    filename: '[name].built.js',
  },
  externals: {
    'jquery': 'jQuery',
  },
  plugins: [
    new ExtractTextPlugin('[name].built.css'),
  ],
  module: {
    rules: [
      {
        test: /yesExtract\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader',
        }),
      },
      {
        test: /noExtract\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: './public',
  },
};
