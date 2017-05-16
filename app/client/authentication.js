exports = module.exports = function(app) {
  return app.auth();
};

exports['@implements'] = 'http://schemas.modulate.io/js/opt/firebase/Authentication';
exports['@singleton'] = true;
exports['@require'] = [ './app' ];
