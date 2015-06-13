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
	.config(['$stateProvider', '$urlRouterProvider', 'PERMISOS', function ($stateProvider, $urlRouterProvider, PERMISOS) {
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
        controller: 'InstrumentosCtrl',
        data: {
          permisos: [PERMISOS.verInstrumentos]
        }
      })
      .state('instrumentos.new', {
        url: '/nuevo',
        templateUrl: 'views/instrumentos/index.html',
        controller: 'InstrumentosCtrl',
        data: {
          permisos: [PERMISOS.crearInstrumentos]
        }
      })
      .state('instrumentos.edit', {
        url: '/:id',
        templateUrl: 'views/instrumentos/edit.html',
        controller: 'InstrumentosEditCtrl',
        data: {
          permisos: [PERMISOS.editarInstrumentos]
        }
      });
  }])
  .run(["$rootScope", "$state", "AuthService", 'AUTH_EVENTS', 'CurrentUser', function($rootScope, $state, AuthService, AUTH_EVENTS, CurrentUser){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      
      var permisos = (toState && toState.data) ? toState.data.permisos : null;
      var usuario = CurrentUser.user();
      try {
        if(permisos && !AuthService.canAccess(usuario, permisos)) {
          event.preventDefault();
          if(!usuario) {
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          } 
          else {
            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
          }
          $state.go('main');
        }
      }
      catch(err) {
        console.log(err);
        $state.go('main');
      }
    });
  }]);
