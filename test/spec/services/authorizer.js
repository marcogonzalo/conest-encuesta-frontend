'use strict';

describe('Service: Authorizer', function () {

  // load the service's module
  beforeEach(module('sedadApp'));

  // instantiate service
  var Authorizer;
  beforeEach(inject(function (_Authorizer_) {
    Authorizer = _Authorizer_;
  }));

  it('should do something', function () {
    expect(!!Authorizer).toBe(true);
  });

});
