exports = module.exports = function(app) {
  return app.auth();
};

exports['@implements'] = 'http://schemas.modulate.io/js/opt/firebase/admin/Authentication';
exports['@singleton'] = true;
exports['@require'] = [ './app' ];
