'use strict';

describe('Controller: FeiraCtrl', function () {

  // load the controller's module
  beforeEach(module('tmpApp'));

  var FeiraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeiraCtrl = $controller('FeiraCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
