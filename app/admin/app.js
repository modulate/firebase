exports = module.exports = function() {
  // Load modules.
  var admin = require('firebase-admin');
  
  
  var key = require("/Users/jaredhanson/Projects/opt/hanson-hq-firebase-adminsdk.json");

  // TODO: Add support for default creds in google cloud environment

  var app = admin.initializeApp({
    credential: admin.credential.cert(key),
    databaseURL: "https://hanson-hq.firebaseio.com"
  });
  return app;
};

exports['@singleton'] = true;
exports['@require'] = [];
