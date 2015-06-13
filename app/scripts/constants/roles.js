'use strict';

/**
 * @ngdoc constant
 * @name Constantes
 * @description
 * # constantes
 * Constant in the sedadApp.
 */
angular.module('sedadApp')
	.constant('ROLES', {
		anonimo: {
			nombre: "anonimo",
			ruta: 'public.home',
			level: 0
		},
		estudiante: {
			nombre: "estudiante",
			ruta: 'estudiante.home',
			level: 1
		},
		docente: {
			nombre: "docente",
			ruta: 'docente.home',
			level: 2
		},
		admin: {
			nombre: "admin",
			ruta: 'admin.home',
			level: 3
		}
	});