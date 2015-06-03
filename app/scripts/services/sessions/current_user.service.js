'use strict';

angular.module('sedadApp')
.factory('CurrentUser', ["AuthToken", function(AuthToken){
	return {
		user : function(){
			if(AuthToken.get('auth_token')){
				return angular.fromJson(AuthToken.get('auth_token')).user;
			} else {
				return { 
					role: 'anon',
					level : 0
				};
			}
		}
	}
}]);