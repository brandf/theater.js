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
    libraryTarget: 'amd',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
      },
    ],
  },
};
