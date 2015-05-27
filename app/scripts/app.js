'use strict';

/**
 * @ngdoc overview
 * @name sedadApp
 * @description
 * # sedadApp
 *
 * Main module of the application.
 */
angular.module('sedadApp', ['ngAnimate', 'ngMessages', 'ngResource', 'ngSanitize', 'ngTouch', 'ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('instrumentos', {
        url: '/instrumentos',
        abstract: true,

        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
      })
      .state('instrumentos.index', {
        url: '/',
        templateUrl: 'views/instrumentos/index.html',
        controller: 'InstrumentosCtrl'
      })
      .state('instrumentos.edit', {
        url: '/:id',
        templateUrl: 'views/instrumentos/edit.html',
        controller: 'InstrumentosEditCtrl'
      });
  })
;
