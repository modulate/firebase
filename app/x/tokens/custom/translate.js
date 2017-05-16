exports = module.exports = function() {
  
  return function translateToFirebase(ctx, options, cb) {
    var claims = {};
    
    if (ctx.user) {
      claims.uid = ctx.user.id;
    }
    
    return cb(null, claims);
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/tokens/translateContextFunc';
exports['@dialect'] = 'http://schemas.modulate.io/tokens/jwt/firebase';
