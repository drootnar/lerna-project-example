const path = require('path');

const files = [
  'index.js',
  'logLevel.js'
]

function generateWebpackConfig() {
  let config = []
  files.forEach(function(file) {
    config.push({
      entry: './src/'+file,
      output: {
        filename: file,
        path: path.resolve(__dirname, 'lib')
      }
    });
  });
  return config;
}

module.exports = generateWebpackConfig();
