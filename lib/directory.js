var admin = require('firebase-admin');


function Directory(url) {
  var key = require("/Users/jaredhanson/System/var/keys/gcp/hanson-hq-firebase-adminsdk.json");
  //var key = require("/Users/jaredhanson/Projects/opt/hanson-hq-firebase-adminsdk.json");

  // TODO: Add support for default creds in google cloud environment

  this._app = admin.initializeApp({
    credential: admin.credential.cert(key),
    databaseURL: url
    //databaseURL: "https://hanson-hq.firebaseio.com"
  });
}

Directory.prototype.get = function(id, cb) {
  this._app.auth().getUser(id)
    .then(function(record) {
      // TODO: Handle disabled attribute
      
      var user = {};
      user.id = record.uid;
      user.displayName = record.displayName;
      if (record.email) {
        user.emails = [{ value: record.email }];
      }
      
      return cb(null, user);
    })
    .catch(function(error) {
      return cb(error);
    });
};

// TODO: add, modify, delete



module.exports = Directory;
