exports = module.exports = function(container) {
  
  return function createFirebaseDirectory(options) {
    return;
    
    var FirebaseDirectory = require('../../lib/directory');
    
    return Promise.all([
      container.create('http://schemas.modulate.io/js/opt/firebase/admin/Authentication'),
      container.create('http://schemas.modulate.io/js/opt/firebase/Authentication')
    ]).then(function(objs) {
      return new FirebaseDirectory(objs[0], objs[1]);
    });
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/ds/createDirectoryFunc';
exports['@singleton'] = true;
exports['@require'] = [ '!container' ];
