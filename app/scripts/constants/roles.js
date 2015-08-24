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
		superadmin: {
			nombre: "superadmin",
			ruta: 'instrumentos.index',
			level: 0
		},
		admin: {
			nombre: "admin",
			ruta: 'instrumentos.index',
			level: 2
		},
		docente: {
			nombre: "docente",
			ruta: 'reportes.index',
			level: 3
		},
		estudiante: {
			nombre: "estudiante",
			ruta: 'consultas.index',
			level: 4
		}
	});