'use strict';

describe('Controller: AutenticacionCtrl', function () {

  // load the controller's module
  beforeEach(module('sedadApp'));

  var AutenticacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutenticacionCtrl = $controller('AutenticacionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
