'use strict';

angular.module('sedadApp')
	.controller('MenuCtrl', ['$scope', 'PERMISOS', 'AuthService', 'CurrentUser', function($scope, PERMISOS, AuthService, CurrentUser){
		$scope.menu = Array();

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
			}

			return menu;
		}
		
		var usuario = CurrentUser.user();
		$scope.menu = generarMenu(usuario);

	    $scope.cerrarSesion = function() {
	        AuthService.logout();
	    }
}]);