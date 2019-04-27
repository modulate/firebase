exports = module.exports = function() {
  var PasswordClient = require('../../../lib/auth/passwordclient');
  
  
  var api = {};
  
  api.createConnection = function(options) {
    return new PasswordClient(options.url);
  }
  
  return api;
};

exports['@implements'] = 'http://schemas.authnomicon.org/sd/IService';
exports['@type'] = 'firebase-password-http';
