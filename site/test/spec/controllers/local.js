'use strict';

describe('Controller: LocalCtrl', function () {

  // load the controller's module
  beforeEach(module('tmpApp'));

  var LocalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocalCtrl = $controller('LocalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
