module.exports = {
  entry: [
    './integration/src/app.js',
  ],
  output: {
    path: './integration/bin/',
    publicPath: '/bin/',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.js$/,
        exclude: ['./node_modules/', './dist/'],
        loaders: ['babel', 'eslint'],
      },
      {
        test: /\.(glsl|vert|frag)$/,
        loaders: ['shader'],
      },
    ],
  },
};
