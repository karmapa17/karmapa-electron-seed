// install babel hooks in the main process
require('babel-register');
require('babel-polyfill');
require('./src/main.js');
