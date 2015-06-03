'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:AutenticacionCtrl
 * @description
 * # AutenticacionCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
.controller('AutenticacionCtrl', ['$scope', '$rootScope', 'AuthService', function ($scope, $rootScope, AuthService) {

		$scope.usuario = {};

	$scope.submitLogin = function(usuario){
		AuthService.login(usuario);
	};
}]);
