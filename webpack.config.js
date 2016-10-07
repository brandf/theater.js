module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: './dist/',
    publicPath: '/dist/',
    filename: 'theater.js',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel', 'eslint'],
      },
    ],
  },
};
