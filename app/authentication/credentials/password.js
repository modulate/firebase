exports = module.exports = function(creds) {
  var Client = require('../../../lib/auth/passwordclient');
  
  
  var api = {};
  
  // TODO: add inferType from URL method
  
  api.createConnection = function(options, connectListener) {
    var client = new Client(options.url);
    client._creds = creds;
    
    client.connect(connectListener);
    return client;
  }
  
  return api;
};

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/IService';
exports['@name'] = 'firebase-password-http';
exports['@require'] = [
  'http://i.bixbyjs.org/security/CredentialsStore'
];
