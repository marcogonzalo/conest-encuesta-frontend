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
			ruta: 'main',
			level: 0
		},
		estudiante: {
			nombre: "estudiante",
			ruta: 'consultas.index',
			level: 1
		},
		docente: {
			nombre: "docente",
			ruta: 'reportes.index',
			level: 2
		},
		admin: {
			nombre: "admin",
			ruta: 'instrumentos.index',
			level: 3
		}
	});