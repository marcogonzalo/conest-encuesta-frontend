'use strict';

/**
 * @ngdoc service
 * @name sedadApp.AuthService
 * @description
 * # AuthService
 * Factory in the sedadApp.
 */

angular.module('sedadApp')
.constant('AuthEvents', {
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
      return localStorage.getItem(key);
    },
    set: function(key, val) {
      return localStorage.setItem(key, val);
    },
    unset: function(key) {
      return localStorage.removeItem(key);
    }
  };
})
.factory('AuthService', ['$http', '$q', '$rootScope', '$state', 'AuthToken', 'AuthEvents', 'CurrentUser', 'SEDAD_API_V1_URL', function($http, $q, $rootScope, $state, AuthToken, AuthEvents, CurrentUser, SEDAD_API_V1_URL) {
  return {
    login: function(credenciales) {
      var d = $q.defer();
      $http.post(SEDAD_API_V1_URL + '/auth', credenciales)
      .success(function(resp) {
        AuthToken.set(resp.auth_token);
        $rootScope.$broadcast(AuthEvents.loginSuccess);
        d.resolve(resp.user);
        $state.go('instrumentos');
      })
      .error(function(resp) {
        $rootScope.$broadcast(AuthEvents.loginFailed);
        d.reject(resp.error);
        $state.go('main');
      });
      return d.promise;
    }
  };
}])
.factory("AuthInterceptor", ['$q', '$injector', 'SEDAD_API_V1_URL', function($q, $injector, SEDAD_API_V1_URL) {
  return {
    // This will be called on every outgoing http request
    request: function(config) {
      var AuthToken = $injector.get("AuthToken");
      var token = AuthToken.get();
      config.headers = config.headers || {};
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }
      return config || $q.when(config);
    },
    // This will be called on every incoming response that has en error status code
    responseError: function(response) {
      var AuthEvents = $injector.get('AuthEvents')
      var matchesAuthenticatePath = response.config && response.config.url.match(new RegExp(SEDAD_API_V1_URL + '/auth'));
      if (!matchesAuthenticatePath) {
        $injector.get('$rootScope').$broadcast({
          401: AuthEvents.notAuthenticated,
          403: AuthEvents.notAuthorized,
          419: AuthEvents.sessionTimeout
        }[response.status], response);
      }
      return $q.reject(response);
    }
  };
}])
.config(["$httpProvider", function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
}]);

//$rootScope.$on(AuthEvents.notAuthorized, function() {
  // ... Take some action in response to a 401
//});