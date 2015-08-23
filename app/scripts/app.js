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
    'chart.js',
    'ngAnimate', 
    'ngMessages', 
    'ngResource', 
    'ngSanitize', 
    'ngTouch', 
    'ui.bootstrap', 
    'ui.router',
    'angular-momentjs'
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
        controller: 'InstrumentosIndexCtrl',
        data: {
          permisos: [PERMISOS.verInstrumento]
        }
      })
      .state('instrumentos.new', {
        url: '/nuevo',
        templateUrl: 'views/instrumentos/new.html',
        controller: 'InstrumentosEditCtrl',
        data: {
          permisos: [PERMISOS.crearInstrumento]
        }
      })
      .state('instrumentos.edit', {
        url: '/:id/editar',
        templateUrl: 'views/instrumentos/edit.html',
        controller: 'InstrumentosEditCtrl',
        data: {
          permisos: [PERMISOS.editarInstrumento]
        }
      })     
      .state('periodos', {
        url : '/periodos',
        abstract : true,
        template : '<div ui-view/>'
      })

      .state('periodos.index', {
        url : '/',
        templateUrl : 'views/periodos/index.html',
        controller: 'PeriodosIndexCtrl',
        data : {
        permisos : [PERMISOS.listarPeriodos]
        }
      })
      .state('periodos.new', {
        url: '/nuevo',
        templateUrl: 'views/periodos/new.html',
        controller: 'PeriodosEditCtrl',
        data: {
          permisos: [PERMISOS.crearPeriodos]
        }
      })
      .state('reportes', {
        url : '/reportes',
        abstract : true,
        template : '<ui-view/>'
      })
      .state('reportes.index', {
        url : '/',
        templateUrl : 'views/reportes/index.html',
        controller: 'ReportesIndexCtrl',
        data : {
          permisos : [PERMISOS.listarReportes]
        }
      })
      .state('consultas', {
        url : '/consultas',
        abstract : true,
        template : '<div ui-view/>'
      })

      .state('consultas.index', {
        url : '/',
        templateUrl : 'views/consultas/index.html',
        controller: 'ConsultasIndexCtrl',
        data : {
          permisos : [PERMISOS.listarConsultasSinResponder]
        }
      })

      .state('consultas.responder', {
        url : '/:id/responder',
        templateUrl : 'views/consultas/responder.html',
        controller: 'ConsultasResponderCtrl',
        data : {
          permisos : [PERMISOS.responderConsulta]
        }
      });


  }])
  .run(["$rootScope", "$state", "AuthService", 'AUTH_EVENTS', 'CurrentUser', function($rootScope, $state, AuthService, AUTH_EVENTS, CurrentUser){
    $rootScope.$on('$stateChangeStart', function(event, next, toState, toParams, fromState, fromParams){
      
      var permisos = (next && next.data) ? next.data.permisos : null;
      var usuario = CurrentUser.user();
      if(!usuario) {
        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
      } 

      try {
        if(permisos && !AuthService.canAccess(usuario, permisos)) {
          event.preventDefault();
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        }
      }
      catch(err) {
        $state.go('main');
      }
    });

    $rootScope.$on(AUTH_EVENTS.notAuthorized, function() {
      $state.go('main');
    });

    $rootScope.$on(AUTH_EVENTS.notAuthenticated, function() {
      $state.go('main');
    });

    $rootScope.$on(AUTH_EVENTS.sessionTimeout, function() {
      $state.go('main');
    });
  }]);
