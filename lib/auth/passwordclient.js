var EventEmitter = require('events').EventEmitter;
var firebase = require('firebase');
var util = require('util');


function PasswordClient(url) {
  EventEmitter.call(this);
  this._url = url;
}

util.inherits(PasswordClient, EventEmitter);

PasswordClient.prototype.connect = function(connectListener) {
  if (connectListener) { this.once('connect', connectListener); }
  
  var self = this;
  this._creds.get(this._url, function(err, cred) {
    // TODO: error handling
    
    var config = {
      apiKey: cred.password,
      authDomain: "hanson-hq.firebaseapp.com",
      databaseURL: self._url,
      //databaseURL: "https://hanson-hq.firebaseio.com",
      storageBucket: "hanson-hq.appspot.com",
    };
    self._app = firebase.initializeApp(config);
    
    self.emit('connect');
  });
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
