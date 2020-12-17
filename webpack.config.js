const path = require('path');

module.exports = {
  entry: ['@babel/polyfill','whatwg-fetch', './js/script.js'],
  output: {
    path: path.resolve(__dirname, './main.js'),
    filename: 'main.js'
  }
};
