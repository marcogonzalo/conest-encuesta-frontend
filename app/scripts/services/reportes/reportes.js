'use strict';
 
angular.module('sedadApp')
	.factory('GraR0', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/historico_pregunta/materias/:codigo/preguntas/:id.json', {codigo: '@codigo',id: '@id'}, {
// 'http://localhost:3000/api/v1/reportes/historico_pregunta/materias/:codigo/preguntas/:id.json', {codigo: '@codigo',id: '@id'}
			update: {
				method: 'GET', isArray: false
			}
		});

     	return res;
	}])
	.factory('GraR1', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/historico_completo/materias/:codigo/instrumentos/:instrumento_id.json', {codigo: '@codigo',instrumento_id: '@id'}, {
			update: {
				method: 'GET', isArray: true
			}
		});
		return res;
	}])	
	.factory('GraR2', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		// var res = $resource (API +'/reportes/historico_comparado/materias/:codigo/instrumentos/:instrumento_id.json?ids[]=1&ids[]=2&ids[]=3', {codigo: '@codigo',instrumento_id: '@id'}, {
		var res = $resource (API +'/reportes/historico_comparado/materias/:codigo/instrumentos/:instrumento_id.json', {codigo: '@codigo',instrumento_id: '@id',ids: '@ids'}, {
			update: {
				method: 'GET', isArray: true

			}
		});
		return res;
	}])	
	.factory('GraR3', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/periodo_completo/materias/:codigo/periodos/:periodo.json', {codigo: '@codigo',periodo: '@periodo'}, {
			update: {
				method: 'GET', isArray: true
			}
		});
		return res;
	}])
	.factory('GraR4', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/periodo_comparado/materias/:codigo_materia/periodos/:periodo.json?ids[]=1&ids[]=2&ids[]=3', {codigo_materia: '@codigo_materia',periodo: '@periodo'}, {
			update: {
				method: 'GET', isArray: true
			}
		});
		return res;
	}])
	.factory('GraR5', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/historico_pregunta/docentes/:cedula_docente/preguntas/:pregunta_id.json', {cedula_docente: '@cedula_docente',pregunta_id: '@pregunta_id'}, {
			update: {
				method: 'GET', isArray: true
			}
		});
		return res;
	}])
	.factory('GraR6', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/historico_completo/docentes/:cedula_docente/instrumentos/:instrumento_id.json', {cedula_docente: '@cedula_docente',instrumento_id: '@instrumento_id'}, {
			update: {
				method: 'GET', isArray: true
			}
		});
		return res;
	
	}])
	.factory('GraR7', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/historico_comparado/docentes/:cedula_docente/instrumentos/:instrumento_id.json?ids[]=1&ids[]=2&ids[]=3', {cedula_docente: '@cedula_docente',instrumento_id: '@instrumento_id'}, {
			update: {
				method: 'GET', isArray: true
			}
		});
		return res;
	
	}])
	.factory('GraR8', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/periodo_completo/docentes/:cedula_docente/periodos/:periodo.json', {cedula_docente: '@cedula_docente',periodo: '@periodo'}, {
			update: {
				method: 'GET', isArray: true
			}
		});
		return res;
	
	}])
	.factory('GraR9', ['$resource', 'SEDAD_API_V1_URL', function ($resource, API){
		var res = $resource (API +'/reportes/periodo_comparado/docentes/:cedula_docente/periodos/:periodo.json?ids[]=1&ids[]=2&ids[]=3', {cedula_docente: '@cedula_docente',periodo: '@periodo'}, {
			update: {
				method: 'GET', isArray: true
			}
		});
		return res;
	
	}])

	.factory('LisDoc',function ($resource){
		return $resource('http://localhost:3000/api/v1/docentes/:id');
		})
	.factory('LisPer',function ($resource){
		return $resource('http://localhost:3000/api/v1/periodos_academicos/:id');
		})
	.factory('LisIns',function ($resource){
		return $resource('http://localhost:3000/api/v1/instrumentos/:id');
		})
	.factory('LisCar',function ($resource){
		return $resource('http://localhost:3000/api/v1/carreras');
		})
	.factory('LisPre',function ($resource){
		return $resource('http://localhost:3000/api/v1/preguntas');
		})
	.factory('LisMat',function ($resource){
		return $resource('http://localhost:3000/api/v1/carreras/:id/materias', {id: '@id'});
		});
