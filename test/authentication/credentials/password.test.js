var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../app/authentication/credentials/password');
var Client = require('../../../lib/auth/passwordclient');
var StubCredentialStore = require('../../stubs/credentialstore');


describe('authentication/credentials/password', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@singleton']).to.equal(true);
    expect(factory['@implements']).to.equal('http://schemas.authnomicon.org/sd/IService');
    expect(factory['@type']).to.equal('firebase-password-http');
  });
  
  describe('API', function() {
    var _creds = new StubCredentialStore();
    
    var ClientSpy = sinon.spy(Client);
    var api = $require('../../../app/authentication/credentials/password',
      { '../../../lib/auth/passwordclient': ClientSpy }
    )(_creds);
    
    
    describe('.createConnection', function() {
      afterEach(function() {
        ClientSpy.resetHistory();
      });
      
      it('should construct client and connect', function(done) {
        sinon.stub(_creds, 'get').yieldsAsync(null, { password: 'keyboard cat' });
        
        var client = api.createConnection({ url: 'http://www.example.com' });
        
        expect(ClientSpy).to.have.been.calledOnceWithExactly('http://www.example.com').and.calledWithNew;
        expect(client).to.be.an.instanceof(Client);
        
        client.once('connect', function() {
          done();
        });
      }); // should construct client and connect
      
      it.skip('should construct client, add connect listener, and connect', function(done) {
        sinon.stub(_creds, 'get').yieldsAsync(null, { password: 'keyboard cat' });
        
        var client = api.createConnection({ url: 'http://www.example.com' }, function() {
          done();
        });
        
        expect(ClientSpy).to.have.been.calledOnceWithExactly('http://www.example.com').and.calledWithNew;
        expect(client).to.be.an.instanceof(Client);
      }); // should construct client, add connect listener, and connect
      
    }); // .createConnection
    
  }); // API
  
});
