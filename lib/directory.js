function Directory(admin, client) {
  this._admin = admin;
  this._client = client;
}

Directory.prototype.find = function(id, cb) {
  this._admin.getUser(id)
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
