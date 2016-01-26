'use strict';

/**
 * @ngdoc overview
 * @name simonApp
 * @description
 * # simonApp
 *
 * Main module of the application.
 */
angular
  .module('simonApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/simon', {
        templateUrl: 'views/simon.html',
        controller: 'SimonCtrl',
        controllerAs: 'simon'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
