'use strict';

/**
 * @ngdoc directive
 * @name smartBalanceApp.directive:sbHeader
 * @description
 * # sbHeader
 */
angular.module('smartBalanceApp')
  .directive('sbHeader', function () {
    return {
      templateUrl: '../../views/directives/header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the sbHeader directive');
      }
    };
  });
