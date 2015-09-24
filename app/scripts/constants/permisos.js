'use strict';

/**
 * @ngdoc constant
 * @name Constantes
 * @description
 * # constantes
 * Constant in the sedadApp.
 */
angular.module('sedadApp')
	.constant('PERMISOS', {
		verInstrumento: "verInstrumento",
		listarInstrumentos: "listarInstrumentos",
		crearInstrumentos: "crearInstrumento",
		editarInstrumentos: "editarInstrumento",
		eliminarInstrumentos: "eliminarInstrumento",
		listarConsultasSinResponder: "listarConsultasSinResponder",
		responderConsultas: "responderConsulta",
		crearPeriodo: "crearPeriodo",
		listarPeriodos: "listarPeriodos",
		listarReportes: "listarReportes",
		listarGraficas: "listarGraficas",
		listarRoles: "listarRoles",
		editarRol: "editarRol",
		listarUsuarios: "listarUsuarios",
		editarUsuario: "editarUsuario"
	});