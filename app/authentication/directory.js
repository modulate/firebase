exports = module.exports = function() {
  var Client = require('../../lib/auth/directoryclient');
  
  
  var api = {};
  
  // TODO: add inferType from URL method
  
  api.createConnection = function(options) {
    return new Client(options.url);
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/IService';
exports['@name'] = 'firebase-directory';
