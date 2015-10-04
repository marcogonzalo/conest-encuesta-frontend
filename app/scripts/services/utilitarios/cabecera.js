'use strict';

angular.module('sedadApp')
	.controller('CabeceraCtrl', ["$rootScope", "$state", '$scope', 'PERMISOS', 'AuthService', 'CurrentUser', function($rootScope, $state, $scope, PERMISOS, AuthService, CurrentUser){
		$scope.menu = Array();
		$scope.mostrarElementosDeSesion = false;
		
		var generarMenu = function(usuario) {
			var menu = Array();
			if(usuario && usuario.rol && usuario.permisos) {
				var accesoTotal = false;
				usuario.permisos.forEach(function(permiso_usuario) {
					accesoTotal = accesoTotal || permiso_usuario === 'accesoTotal';
					var permiso = PERMISOS[permiso_usuario];
					if(permiso || accesoTotal) {
						if(permiso == 'listarInstrumentos' || accesoTotal) {
							menu.unshift({titulo: 'Instrumentos', state: 'instrumentos.index'});
						}
						if(permiso == 'listarConsultasSinResponder') {
							menu.unshift({titulo: 'Consultas', state: 'consultas.index'});
						}
						if(permiso == 'listarPeriodos' || accesoTotal) {
							menu.unshift({titulo: 'Períodos', state: 'periodos.index'});
						}
						if(permiso == 'listarReportes' || accesoTotal) {
							menu.unshift({titulo: 'Reportes', state: 'reportes.index'});
						}
						if(permiso == 'listarRoles' || accesoTotal) {
							menu.unshift({titulo: 'Roles', state: 'roles.index'});
						}
						if(permiso == 'listarUsuarios' || accesoTotal) {
							menu.unshift({titulo: 'Usuarios', state: 'usuarios.index'});
						}
					}
				});
				$scope.mostrarElementosDeSesion = true;
			}
			else {
				$scope.mostrarElementosDeSesion = false;
			}

			return menu;
		}

	    $scope.cerrarSesion = function() {
	        AuthService.logout();
	    }
		
		$rootScope.$on('$stateChangeStart', function(usuario) {
			var usuario = CurrentUser.user();
			$scope.menu = generarMenu(usuario);
		});

		var usuario = CurrentUser.user();
		$scope.menu = generarMenu(usuario);
	}]);