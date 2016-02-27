'use strict';

describe('Directive: sbHeader', function () {

  // load the directive's module
  beforeEach(module('smartBalanceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sb-header></sb-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sbHeader directive');
  }));
});
