exports = module.exports = function() {
  // Load modules.
  var firebase = require('firebase');
  
  
  // FIXME: Failes with inexplicable error if process.env.FIREBASE_API_KEY is not set
  //       this is probably in electrolyte, and need to try/catch
  var config = {
    apiKey: process.env['FIREBASE_API_KEY'],
    authDomain: "hanson-hq.firebaseapp.com",
    databaseURL: "https://hanson-hq.firebaseio.com",
    storageBucket: "hanson-hq.appspot.com",
  };

  var app = firebase.initializeApp(config);
  return app;
};

exports['@singleton'] = true;
exports['@require'] = [];
