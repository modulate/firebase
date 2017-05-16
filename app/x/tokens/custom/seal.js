exports = module.exports = function(auth) {
  var clone = require('clone');
  
  // https://firebase.google.com/docs/auth/admin/
  // https://firebase.google.com/docs/auth/admin/create-custom-tokens
  return function seal(claims, options, cb) {
    var additionalClaims = clone(claims);
    delete additionalClaims.uid;
    if (Object.keys(additionalClaims).length == 0) {
      additionalClaims = undefined;
    }
    
    auth.createCustomToken(claims.uid, additionalClaims)
      .then(function(customToken) {
        return cb(null, customToken);
      })
      .catch(function(error) {
        return cb(error);
      });
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/tokens/sealFunc';
exports['@type'] = 'http://schemas.modulate.io/tokens/jwt/firebase';
exports['@require'] = [ 'http://schemas.modulate.io/js/opt/firebase/admin/Authentication' ];
