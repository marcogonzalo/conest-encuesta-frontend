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
        controller: 'PeriodosNewCtrl',
        data: {
          permisos: [PERMISOS.crearPeriodos]
        }
      })
      .state('periodos.ofertas', {
        url: '/:periodo/ofertas_academicas',
        templateUrl: 'views/periodos/ofertas_academicas.html',
        controller: 'PeriodosOfertasCtrl',
        data: {
          permisos: [PERMISOS.cambiarInstrumentoDeConsulta]
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
      })

      .state('roles', {
        url: '/roles',
        abstract: true,

        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
      })
      .state('roles.index', {
        url: '/',
        templateUrl: 'views/roles/index.html',
        controller: 'RolesIndexCtrl',
        data: {
          permisos: [PERMISOS.listarRoles]
        }
      })
      .state('roles.edit', {
        url: '/:id/editar',
        templateUrl: 'views/roles/edit.html',
        controller: 'RolesEditCtrl',
        data: {
          permisos: [PERMISOS.editarRol]
        }
      })

      .state('usuarios', {
        url: '/usuarios',
        abstract: true,

        // Note: abstract still needs a ui-view for its children to populate.
        // You can simply add it inline here.
        template: '<ui-view/>'
      })
      .state('usuarios.index', {
        url: '/',
        templateUrl: 'views/usuarios/index.html',
        controller: 'UsuariosIndexCtrl',
        data: {
          permisos: [PERMISOS.listarUsuarios]
        }
      })
      .state('usuarios.edit', {
        url: '/:id/editar',
        templateUrl: 'views/usuarios/edit.html',
        controller: 'UsuariosEditCtrl',
        data: {
          permisos: [PERMISOS.editarUsuario]
        }
      });


  }])
  .run(["$rootScope", "$state", "AuthService", 'AUTH_EVENTS', 'CurrentUser', function($rootScope, $state, AuthService, AUTH_EVENTS, CurrentUser){
    $rootScope.$on('$stateChangeStart', function(event, next, toState, toParams, fromState, fromParams){
      var permisos = (next && next.data) ? next.data.permisos : null;
      var usuario = CurrentUser.user();
        if(permisos) {
          AuthService.canAccess(usuario, permisos, function(promise) {
            promise.then(function(puede) {
              if(!puede) {
                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
              }
            });
          });
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

    $rootScope.$on(AUTH_EVENTS.notAuthorized, function() {
      $state.go('main');
    });

    $rootScope.$on(AUTH_EVENTS.notAuthenticated, function() {
      $state.go('main');
    });

    $rootScope.$on(AUTH_EVENTS.sessionTimeout, function() {
      $state.go('main');
    });

    $rootScope.$on(AUTH_EVENTS.logoutSuccess, function() {
      $state.go('main');
    });
  }]);

