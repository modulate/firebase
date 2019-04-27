var firebase = require('firebase');


function PasswordClient(url) {
  var config = {
    apiKey: process.env['FIREBASE_API_KEY'],
    authDomain: "hanson-hq.firebaseapp.com",
    databaseURL: url,
    //databaseURL: "https://hanson-hq.firebaseio.com",
    storageBucket: "hanson-hq.appspot.com",
  };

  this._app = firebase.initializeApp(config);
}

PasswordClient.prototype.verify = function(username, password, cb) {
  this._app.auth().signInWithEmailAndPassword(username, password)
    .then(function(record) {
      var user = {};
      user.id = record.uid;
      user.displayName = record.displayName;
      if (record.email) {
        user.emails = [{ value: record.email }];
      }
  
      return cb(null, user);
    }).catch(function(error) {
      return cb(error);
    });
}

module.exports = PasswordClient;
