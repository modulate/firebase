exports = module.exports = function(container) {
  
  return function createFirebaseDirectory(options) {
    var Directory = require('../../../lib/directory');
    
    return Promise.all([
      container.create('http://schemas.modulate.io/js/opt/firebase/admin/Authentication'),
      container.create('http://schemas.modulate.io/js/opt/firebase/Authentication')
    ]).then(function(comps) {
      return new Directory(comps[0], comps[1]);
    });
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/ds/createDirectoryFunc';
exports['@singleton'] = true;
exports['@require'] = [ '!container' ];
