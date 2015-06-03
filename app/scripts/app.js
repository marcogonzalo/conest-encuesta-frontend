'use strict';

/**
 * @ngdoc overview
 * @name sedadApp
 * @description
 * # sedadApp
 *
 * Main module of the application.
 */
angular.module('sedadApp', [
    'ngAnimate', 
    'ngMessages', 
    'ngResource', 
    'ngSanitize', 
    'ngTouch', 
    'ui.bootstrap', 
    'ui.router'
  ])
	.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'AutenticacionCtrl'
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
  .run(["$rootScope", "$state", "AuthService", function($rootScope, $state, AuthService){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      // console.log(toState);
      if(!AuthService.authorize(toState.data.access)){
        event.preventDefault();
        $state.go('main');
      }
    });
  }]);
