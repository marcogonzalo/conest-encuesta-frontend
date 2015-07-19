'use strict';

describe('Controller: ConsultasCtrl', function () {

  // load the controller's module
  beforeEach(module('sedadApp'));

  var ConsultasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsultasCtrl = $controller('ConsultasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
