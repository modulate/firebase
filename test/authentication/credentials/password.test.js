var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../app/authentication/credentials/password');
var Client = require('../../../lib/auth/passwordclient');


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
    var ClientSpy = sinon.spy(Client);
    
    var api = $require('../../../app/authentication/credentials/password',
    { '../../../lib/auth/passwordclient': ClientSpy })();
    
    describe('.createConnection', function() {
      
      it('should do something', function() {
        api.createConnection({ url: 'foo'});
        
        expect(ClientSpy).to.have.been.calledOnce;
        expect(ClientSpy).to.have.been.calledWithExactly('foo');
        
        //expect(1).to.equal(1);
      })
      
    });
    
  });
  
});