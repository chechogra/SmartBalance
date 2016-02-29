'use strict';

/**
 * @ngdoc overview
 * @name smartBalanceApp
 * @description
 * # smartBalanceApp
 *
 * Main module of the application.
 */
angular
  .module('smartBalanceApp', ['ngAnimate', 'ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/dashboard', {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl',
      controllerAs: 'dashboard'
    }).otherwise({
      redirectTo: '/dashboard'
    });

    // configure html5 to get links working on jsfiddle
    //$locationProvider.html5Mode(true);
  });
