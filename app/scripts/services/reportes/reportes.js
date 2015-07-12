'use strict';

// angular.module('sedadApp')
// 	.factory('ListadoCarreras',function($resource){
// 		return $resource('http://localhost:3000/api/v1/carreras',{},{
// 			 query:  {method:'GET', params:{}, isArray:true}
// 		});
//      });


angular.module('sedadApp')
	.factory('ListadoCarreras', ['$resource', 'SEDAD_API_V1_URL', function($resource, API){
   
		var res = $resource('http://localhost:3000/api/v1/carreras', {id: '@id'}, {
		// var res = $resource(API + '/periodos_academicos/:id', {id: '@id'}, {			
			update: {
				method: 'PUT'
			}
		});
		return res;
	}]);




angular.module('sedadApp')
	.factory('ListadoMaterias',function($resource){
		return $resource('http://localhost:3000/api/v1/carreras/:carrera_id/materias',{carrera_id: '@carrera_id'},{
			 query:  {method:'GET', params:{}, isArray:true}
		});
     });

angular.module('sedadApp')
	.factory('ListadoPreguntas',function($resource){
		return $resource('http://localhost:3000/api/v1/preguntas',{id: '@id'},{
			 query:  {method:'GET', params:{}, isArray:true}
		});
     });

angular.module('sedadApp')
	.factory('ListadoInstrumentos',function($resource){
		return $resource('http://localhost:3000/api/v1/instrumentos',{id: '@id'},{
			 query:  {method:'GET', params:{}, isArray:true}
		});
     });

angular.module('sedadApp')
	.factory('ListadoPeriodos',function($resource){
		return $resource('http://localhost:3000/api/v1/periodos_academicos',{id: '@id'},{
			 query:  {method:'GET', params:{}, isArray:true}
		});
     });

angular.module('sedadApp')
	.factory('ListadoDocentes',function($resource){
		return $resource('http://localhost:3000/api/v1/docentes',{id: '@id'},{
			 query:  {method:'GET', params:{}, isArray:true}
		});
     });

angular.module('sedadApp')
.factory('CrResource', function($resource) {
   var factory = {
    obtenerCr: $resource('http://localhost:3000/api/v1/carreras',{}, {
       todosCr: {method: 'GET', isArray: true}
    }),
    agregarCr: $resource('http://localhost:3000/api/v1/carreras',{},{
      nuevoPr: {method: 'POST'}//, params: {interrogante: '@interrogante', descripcion: '@descripcion', tipo_pregunta_id: '@tipo_pregunta_id'}
    }),
    eliminarCr: $resource('http://localhost:3000/api/v1/carreras:id',{},{
      borraCr: {method: 'DELETE', params: {id: '@id'}}
    }),
   };
   return factory;
});








// angular.module('sedadApp')
// 	.factory('ListadoMaterias',function($resource){
// 		return $resource('http://localhost:3000/api/v1/reportes/historico_pregunta/materias/6014/preguntas/:id.csv',{id: '@id',codigo: '@codigo'},{
// 			 query:  {method:'GET', params:{format: 'csv'}, isArray:true},
//              post:   {method:'POST'},
//              update: {method:'PUT'},
//              remove: {method:'DELETE'}
// 		});

     // });	

	