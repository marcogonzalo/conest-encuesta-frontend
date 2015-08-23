'use strict';

/**
 * @ngdoc service
 * @name sedadApp.AuthService
 * @description
 * # AuthService
 * Factory in the sedadApp.
 */

angular.module('sedadApp')
.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
.factory('AuthToken', function() {
  return {
    get: function(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    set: function(key, val) {
      return localStorage.setItem(key, val);
    },
    unset: function(key) {
      return localStorage.removeItem(key);
    }
  };
})
.factory('AuthService', ['$http', '$q', '$rootScope', '$state', 'AuthToken', 'AUTH_EVENTS', 'PERMISOS', 'ROLES', 'CurrentUser', 'SEDAD_API_V1_URL', function($http, $q, $rootScope, $state, AuthToken, AUTH_EVENTS, PERMISOS, ROLES, CurrentUser, SEDAD_API_V1_URL) {
  return {
    login: function(credenciales) {
      var d = $q.defer();
      $http.post(SEDAD_API_V1_URL + '/auth', credenciales)
      .success(function(resp) {
        AuthToken.set('usuario',angular.toJson(resp));
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        d.resolve(resp.user);
        $state.go(ROLES[(resp.rol).toLowerCase()].ruta);
      })
      .error(function(resp) {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        d.reject(resp.error);
        $state.go('main');
      });
      return d.promise;
    },
    canAccess: function(user, permissions) {
      permissions = angular.isArray(permissions) ? permissions : [permissions];
      if(user && user.rol && user.permisos) {
        var access = false;
        permissions.forEach(function(permiso) {
          if(!PERMISOS[permiso])
            throw "Valor de permiso erróneo";
          
          user.permisos.forEach(function(permiso_usuario) {
            access = access || (permiso === permiso_usuario);
          })
        });
        callback(promise);
      }
      else
        return false;
    }
  };
}])
.factory("AuthInterceptor", ['$q', '$injector', 'SEDAD_API_V1_URL', function($q, $injector, SEDAD_API_V1_URL) {
  return {
    // This will be called on every outgoing http request
    request: function(config) {
      var AuthToken = $injector.get("AuthToken");
      var usuario = AuthToken.get('usuario');
      config.headers = config.headers || {};
      if(usuario.auth_token) {
        console.log("hola");
        config.headers.Authorization = "Bearer " + usuario.auth_token;
      }

      console.log(usuario);
      console.log(config.headers);
      return config || $q.when(config);
    },
    // This will be called on every incoming response that has en error status code
    responseError: function(response) {
      var AUTH_EVENTS = $injector.get('AUTH_EVENTS')
      var matchesAuthenticatePath = response.config && response.config.url.match(new RegExp(SEDAD_API_V1_URL + '/auth'));
      if (!matchesAuthenticatePath) {
        $injector.get('$rootScope').$broadcast({
          401: AUTH_EVENTS.notAuthenticated,
          403: AUTH_EVENTS.notAuthorized,
          419: AUTH_EVENTS.sessionTimeout
        }[response.status], response);
      }
      return $q.reject(response);
    }
  };
}]);

angular.module('sedadApp').config(["$httpProvider", function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}]);
<<<<<<< HEAD
=======

>>>>>>> permisos_dinamicos
