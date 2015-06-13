'use strict';

angular.module('sedadApp')
.factory('CurrentUser', ["AuthToken", 'ROLES', function(AuthToken, ROLES){
	return {
		user : function(){
			if(AuthToken.get('usuario')) {
				return angular.fromJson(AuthToken.get('usuario'));
			} else {
				return { rol: ROLES.anonimo };
			}
		}
	}
}]);