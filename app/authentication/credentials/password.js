exports = module.exports = function() {
  var Client = require('../../../lib/auth/passwordclient');
  
  
  var api = {};
  
  // TODO: add inferType from URL method
  
  api.createConnection = function(options) {
    return new Client(options.url);
  }
  
  return api;
};

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.authnomicon.org/sd/IService';
exports['@type'] = 'firebase-password-http';
