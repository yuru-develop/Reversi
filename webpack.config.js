const path = require('path');

module.exports = {
    entry: './src/js/test.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      
  }
}