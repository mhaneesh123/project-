const path = require('path');

module.exports = {
  mode:'production',
  entry: './src/main.js', // Entry point for your application
  output: {
    filename: 'builded.js', // Name of the output file
    path: path.resolve(__dirname, 'public') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Files to process
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Transpile JavaScript using Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Babel presets
          }
        }
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'] // Loaders for CSS
      }
    ]
  },
  plugins: [
    // Add plugins here
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
