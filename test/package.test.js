/* global describe, it */

var expect = require('chai').expect;
var sinon = require('sinon');


describe('@modulate/firebase', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('io.modulate/vnd/firebase');
      
      expect(json.assembly.components).to.have.length(4);
      expect(json.assembly.components).to.include('authentication/directory');
      expect(json.assembly.components).to.include('authentication/credentials/password');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});


afterEach(function() {
  sinon.restore();
});
