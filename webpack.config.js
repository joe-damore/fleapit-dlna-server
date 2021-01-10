const path = require('path');
const RemoveFilesPlugin = require('remove-files-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RemoveFilesPlugin({
      before: {
        log: false,
        include: [
          path.resolve(__dirname, 'dist'),
        ],
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@core': path.resolve(__dirname, 'src', 'core'),
    },
  },
};
