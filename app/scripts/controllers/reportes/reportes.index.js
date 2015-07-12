'use strict';

angular.module('sedadApp')
	.controller('ReportesIndexCtrl', ['$scope', 'ListadoCarreras', 'ListadoMaterias', 'ListadoPreguntas', 'ListadoInstrumentos', 'ListadoPeriodos', 'ListadoDocentes', function($scope, $http, ReportePdf, ReporteCsv){
		$scope.id = '1';
		$scope.mensaje='por defecto';
		$scope.urlp='';
		$scope.urlc='';
        $scope.Visible1=false;
        $scope.Visible2=true;
        $scope.Vp1=true;
        $scope.Vp2=true;
        $scope.Vp3=true;
        $scope.Vp4=true;
        $scope.Vp5=true;
        $scope.Vp6=true;
        $scope.codigos='';
        $scope.preguntas='';
        $scope.instrumentos='';
        $scope.cedulas = $http.get('http://localhost:3000/api/v1/docentes');
        $scope.periodos = $http.get('http://localhost:3000/api/v1/periodos_academicos');

        $scope.repdis = [
        {id:' 1',nombre:'Histórico de pregunta por materia',  
          rpdf:'http://localhost:3000/api/v1/reportes/historico_pregunta/materias/:codigo/preguntas/:id.pdf',               
          rcsv:'http://localhost:3000/api/v1/reportes/historico_pregunta/materias/:codigo/preguntas/:id.csv'},
    
        {id:' 2',nombre:'Histórico completo de materia',      
          rpdf:'http://localhost:3000/api/v1/reportes/historico_completo/materias/:codigo/instrumentos/:instrumento_id.pdf',
          rcsv:'http://localhost:3000/api/v1/reportes/historico_completo/materias/:codigo/instrumentos/:instrumento_id.csv'},
    
        {id:' 3',nombre:'Histórico comparado de materia',     
          rpdf:'http://localhost:3000/api/v1/reportes/historico_comparado/materias/:codigo/instrumentos/:instrumento_id.pdf',     
          rcsv:'http://localhost:3000/api/v1/reportes/historico_comparado/materias/:codigo/instrumentos/:instrumento_id.csv'},
    
        {id:' 4',nombre:'Reporte periodo completo de materia', 
          rpdf:'http://localhost:3000/api/v1/reportes/periodo_completo/materias/:codigo/periodos/:periodo.pdf',                
          rcsv:'http://localhost:3000/api/v1/reportes/periodo_completo/materias/:codigo/periodos/:periodo.csv'},

        {id:' 5',nombre:'Reporte periodo comparado de materia',
          rpdf:'http://localhost:3000/api/v1/reportes/periodo_comparado/materias/:codigo/periodos/:periodo.pdf',
          rcsv:'http://localhost:3000/api/v1/reportes/periodo_comparado/materias/:codigo/periodos/:periodo.csv'},
    
        {id:' 6',nombre:'Historico de pregunta por docente',
          rpdf:'http://localhost:3000/api/v1/reportes/historico_pregunta/docentes/:cedula_docente/preguntas/:pregunta_id.pdf',
          rcsv:'http://localhost:3000/api/v1/reportes/historico_pregunta/docentes/:cedula_docente/preguntas/:pregunta_id.csv'},
    
        {id:' 7',nombre:'Historico completo de docente',
          rpdf:'http://localhost:3000/api/v1/reportes/historico_completo/docentes/:cedula_docente/instrumentos/:instrumento_id.pdf',
          rcsv:'http://localhost:3000/api/v1/reportes/historico_completo/docentes/:cedula_docente/instrumentos/:instrumento_id.csv'},
    
        {id:' 8',nombre:'Historico comparado de docente',
          rpdf:'http://localhost:3000/api/v1/reportes/:historico_comparado/docentes/:cedula_docente/instrumentos/:instrumento_id.pdf',
          rcsv:'http://localhost:3000/api/v1/reportes/:historico_comparado/docentes/:cedula_docente/instrumentos/:instrumento_id.csv'},
    
        {id:' 9',nombre:'Período completo de docente',
          rpdf:'http://localhost:3000/api/v1/reportes/periodo_completo/docentes/:cedula_docente/periodos/:periodo.pdf',
          rcsv:'http://localhost:3000/api/v1/reportes/periodo_completo/docentes/:cedula_docente/periodos/:periodo.csv'},
    
        {id:'10',nombre:'Período comparado de docente',
          rpdf:'http://localhost:3000/api/v1/reportes/periodo_comparado/docentes/:cedula_docente/periodos/:periodo.pdf',
          rcsv:'http://localhost:3000/api/v1/reportes/periodo_comparado/docentes/:cedula_docente/periodos/:periodo.csv'}];
 
         $scope.LisCar = function() {
 		  $scope.docentes=ListadoCarreras.query(); 
		  console.log($scope.Docentes);
		  $scope.Visible1=false;
          $scope.Visible2=true;
	    };
        $scope.LisMat = function() {
 		  $scope.materias=ListadoMaterias.query(); 
		  console.log($scope.Materias);
		  $scope.Visible1=false;
          $scope.Visible2=true;
	    };
         $scope.LisPreg = function() {
 		  $scope.preguntas=ListadoPreguntas.query(); 
		  console.log($scope.Preguntas);
		  $scope.Visible1=false;
          $scope.Visible2=true;
	    };
         $scope.LisInst = function() {
 		  $scope.instrumentos=ListadoInstrumentos.query(); 
		  console.log($scope.Instrumentos);
		  $scope.Visible1=false;
          $scope.Visible2=true;
	    };

         $scope.LisPeri = function() {
 		  $scope.periodos=ListadoPeriodos.query(); 
		  console.log($scope.Periodos);
		  $scope.Visible1=false;
          $scope.Visible2=true;
	    };
         $scope.LisDoc = function() {
 		  $scope.docentes=ListadoDocentes.query(); 
		  console.log($scope.Docentes);
		  $scope.Visible1=false;
          $scope.Visible2=true;
	    };


 
        // $scope.cvsReporte = function() {
        //   ReporteCsv.query({id:'1',codigo:'6014'});
        //   $scope.Visible1=false;
        //   $scope.Visible2=true;
        // }; 

         $scope.pedirparametros = function(index) {
         $scope.Visible1=true;
         $scope.Visible2=false;
         console.log(index);
       if (index === 0) {
       	$scope.Vp0=false;
       	$scope.Vp1=false;
        $scope.Vp2=false;
        $scope.Vp3=true;
        $scope.Vp4=true;
        $scope.Vp5=true;
        $scope.mensaje='Reporte 1';

        };
       if (index === 1) {
       	$scope.Vp0=true;
       	$scope.Vp1=false;
        $scope.Vp2=true;
        $scope.Vp3=false;
        $scope.Vp4=true;
        $scope.Vp5=true;
        $scope.mensaje='Reporte 2';
        } 
       if (index === 2) {
       	$scope.Vp0=true;
       	$scope.Vp1=false;
        $scope.Vp2=true;
        $scope.Vp3=false;
        $scope.Vp4=true;
        $scope.Vp5=true;
         $scope.mensaje='Reporte 3';
        } 
       if (index === 3) {
       	$scope.Vp0=true;
       	$scope.Vp1=false;
        $scope.Vp2=true;
        $scope.Vp3=true;
        $scope.Vp4=false;
        $scope.Vp5=true;
        $scope.mensaje='Reporte 4';
        }; 
       if (index === 4) {
       	$scope.Vp0=true;
       	$scope.Vp1=false;
        $scope.Vp2=true;
        $scope.Vp3=true;
        $scope.Vp4=false;
        $scope.Vp5=true;
         $scope.mensaje='Reporte 5';
        };
       if (index === 5) {
       	$scope.Vp0=true;
       	$scope.Vp1=true;
        $scope.Vp2=false;
        $scope.Vp3=true;
        $scope.Vp4=true;
        $scope.Vp5=false;
         $scope.mensaje='Reporte 6';
        }; 
       if (index === 6) {
       	$scope.Vp0=true;
       	$scope.Vp1=true;
        $scope.Vp2=true;
        $scope.Vp3=false;
        $scope.Vp4=true;
        $scope.Vp5=false;
        $scope.mensaje='Reporte 7';
        };
       if (index === 7) {
       	$scope.Vp0=true;
       	$scope.Vp1=true;
        $scope.Vp2=true;
        $scope.Vp3=false;
        $scope.Vp4=true;
        $scope.Vp5=false;
         $scope.mensaje='Reporte 8';
        };
       if (index === 8) {
        $scope.mensaje='Reporte 9';
        $scope.Vp0=true;
        $scope.Vp1=true;
        $scope.Vp2=true;
        $scope.Vp3=true;
        $scope.Vp4=false;
        $scope.Vp5=false;
        };
       if (index === 9) {
       	$scope.mensaje='Reporte 10';
       	$scope.Vp0=true;
        $scope.Vp1=true;
        $scope.Vp2=true;
        $scope.Vp3=true;
        $scope.Vp4=false;
        $scope.Vp5=false;
        $scope.mensaje='Reporte 10';
        $scope.urlp=$scope.repdis[9].rpdf;
        $scope.urlc=$scope.repdis[9].rcsv;
        };
       // if (index === 11) {
       //   $scope.mensaje='Reporte 11';
       //  }; 


          // switch(index) {
         	
          //   case 1:
          //     $scope.mensaje='uno cero';
          //   case 2:
          //     $scope.mensaje='dos uno';
          //   case 3:
          //     $scope.mensaje='tres dos';  
          //   case 4:
          //     $scope.mensaje='cuatro';   
          //   case 5:
          //     $scope.mensaje='cinco';
          //   case 6:
          //     $scope.mensaje='seis';  
          //   case 7:
          //     $scope.mensaje='cuatro';                                     
          //   default:
          //     $scope.mensaje='por defecto 3'; 
          //     console.log(index); 
          // };

        };  

         $scope.volver = function() {
           $scope.Visible1=false;
           $scope.Visible2=true;
           $scope.Vp0=true;
           $scope.Vp1=true;
           $scope.Vp2=true;  
           $scope.Vp3=true;
           $scope.Vp4=true; 
           $scope.Vp5=true;
         };   
	}]);
// // ;
// // })
// .controller('MatCtrl', function($scope,$http) {
//   $scope.tps=TpResource.obtenerTp.todosTp(); 
// })
// .controller('OpCtrl', function($scope,$http,OpResource) {
//   $scope.ops=OpResource.obtenerOp.todosOp(); 
// })
// ;