'use strict';

angular.module('sedadApp')
  .controller('ReportesIndexCtrl', ['$scope','$http', 'SEDAD_API_V1_URL', 'LisMat', 'LisPre', 'LisCar', 'LisIns', 'LisPer', 'LisDoc', 'GraR0','GraR1','GraR2','GraR3','GraR4','GraR5','GraR6','GraR7','GraR8','GraR9', function ($scope,$http,API,LisMat,LisPre,LisCar,LisIns,LisPer,LisDoc,GraR0,GraR1,GraR2,GraR3,GraR4,GraR5,GraR6,GraR7,GraR8,GraR9){
    $scope.repdis = [
    {id:' 0',nombre:'Histórico de Pregunta por Materia',  
    pdcs:'(PDF/CSV)',
          // rpdf:'http://localhost:3000/api/v1/reportes/historico_pregunta/materias/:codigo/preguntas/:id.pdf',               
          // rcsv:'http://localhost:3000/api/v1/reportes/historico_pregunta/materias/:codigo/preguntas/:id.csv',
    bpdf: false,bcsv: false,grat: false,grar: false,gral: true,grab: true},
    {id:' 1',nombre:'Histórico Completo de Materia',      
    pdcs:'(PDF)',
          // rpdf:'http://localhost:3000/api/v1/reportes/historico_completo/materias/:codigo/instrumentos/:instrumento_id.pdf',
          // rcsv:'http://localhost:3000/api/v1/reportes/historico_completo/materias/:codigo/instrumentos/:instrumento_id.csv',
    bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true},
    {id:' 2',nombre:'Histórico Comparado de Materia',     
    pdcs:'(PDF)',
    // rpdf:'http://localhost:3000/api/v1/reportes/historico_comparado/materias/:codigo/instrumentos/:instrumento_id.pdf',     
    // rcsv:'http://localhost:3000/api/v1/reportes/historico_comparado/materias/:codigo/instrumentos/:instrumento_id.csv',
    bpdf: false,bcsv: true,grat: true,grar: true,gral: false,grab: false},    
    {id:' 3',nombre:'Completo de Materia por Período', 
    pdcs:'(PDF)',
    // rpdf:'http://localhost:3000/api/v1/reportes/periodo_completo/materias/:codigo/periodos/:periodo.pdf',                
    // rcsv:'http://localhost:3000/api/v1/reportes/periodo_completo/materias/:codigo/periodos/:periodo.csv',
    bpdf: false,bcsv: false,grat: false,grar: false,gral: true,grab: true},
    {id:' 4',nombre:'Reporte Período Comparado de Materia',
    pdcs:'(PDF)',
    // rpdf:'http://localhost:3000/api/v1/reportes/periodo_comparado/materias/:codigo/periodos/:periodo.pdf',
    // rcsv:'http://localhost:3000/api/v1/reportes/periodo_comparado/materias/:codigo/periodos/:periodo.csv',
    bpdf: false,bcsv: true,grat: true,grar: true,gral: false,grab: false},     
    {id:' 5',nombre:'Histórico de Pregunta por Docente',
    pdcs:'(PDF/CSV)',
    // rpdf:'http://localhost:3000/api/v1/reportes/historico_pregunta/docentes/:cedula_docente/preguntas/:pregunta_id.pdf',
    // rcsv:'http://localhost:3000/api/v1/reportes/historico_pregunta/docentes/:cedula_docente/preguntas/:pregunta_id.csv',
    bpdf: false,bcsv: false,grat: false,grar: false,gral: true,grab: true},
    {id:' 6',nombre:'Histórico Completo de Docente',
    pdcs:'(PDF)',
    // rpdf:'http://localhost:3000/api/v1/reportes/historico_completo/docentes/:cedula_docente/instrumentos/:instrumento_id.pdf',
    // rcsv:'http://localhost:3000/api/v1/reportes/historico_completo/docentes/:cedula_docente/instrumentos/:instrumento_id.csv',
    bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true},   
    {id:' 7',nombre:'Histórico Comparado de Docente',
    pdcs:'(PDF)',
    // rpdf:'http://localhost:3000/api/v1/reportes/:historico_comparado/docentes/:cedula_docente/instrumentos/:instrumento_id.pdf',
    // rcsv:'http://localhost:3000/api/v1/reportes/:historico_comparado/docentes/:cedula_docente/instrumentos/:instrumento_id.csv',
    bpdf: false,bcsv: true,grat: true,grar: true,gral: false,grab: false},    
    {id:' 8',nombre:'Período Completo de Docente',
    pdcs:'(PDF)',
    // rpdf:'http://localhost:3000/api/v1/reportes/periodo_completo/docentes/:cedula_docente/periodos/:periodo.pdf',
    // rcsv:'http://localhost:3000/api/v1/reportes/periodo_completo/docentes/:cedula_docente/periodos/:periodo.csv',
    bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true}, 
    {id:' 9',nombre:'Período Comparado de Docente',
    pdcs:'(PDF)',
    // rpdf:"API+'/reportes/periodo_comparado/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.pdf'",
    // rcsv:'http://localhost:3000/api/v1/reportes/periodo_comparado/docentes/:cedula_docente/periodos/:periodo.csv',
    bpdf: false,bcsv: true,grat: true,grar: true,gral: false,grab: false}, 
    ];
    $scope.docentes     = LisDoc.query();
    $scope.docsel       = 0;
    $scope.periodos     = LisPer.query();
    $scope.persel       = 0;  
    $scope.instrumentos = LisIns.query();
    $scope.inssel       = 0;
    $scope.carreras     = LisCar.query();
    $scope.carsel       = 1;//  ''
    $scope.preguntas    = LisPre.query();
    $scope.presel       = 0;
    $scope.materias     = LisMat.query({id: $scope.carsel});
    $scope.Visible1     =false;
    $scope.Visible2     =true;
    $scope.Vp1          =true;
    $scope.Vp2          =true;
    $scope.Vp3          =true;
    $scope.Vp4          =true;
    $scope.Vp5          =true;
    $scope.Vp6          =true;
    $scope.Vp7          =false;
    $scope.Vp70=true;$scope.Vp71=true;$scope.Vp72=true;
    $scope.Vp73=true;$scope.Vp74=true;$scope.Vp75=true;
    $scope.Vp76=true;$scope.Vp77=true;$scope.Vp78=true;
    $scope.Vp79=true;
    $scope.urlgra       = '';                 
    $scope.numrep       = 0;
    $scope.tiprep       = 0;  //pdf por defecto 
    $scope.mensaje      ='por defecto';
    $scope.repourl      = "";
    $scope.nombre_reporte='Ver Siguiente Gráfica';
    $scope.pdf          =false;
    $scope.csv          =false;
    $scope.gra          =false;
    $scope.etiquetas = ['Opción 1','Opción 2','Opción 3','Opción 4','Opción 5'];
    $scope.datos1    = [1,2,3,4,5];
    $scope.datos0    = [0,0,0,0,0];
    $scope.series1   = [];
    $scope.ejex1     = ['vot 1','vot 2','vot 3','vot 4','vot 5'];
// Valores obligatorios requeridos por las graficas
    $scope.type      = 'PolarArea';
    $scope.toogle    = function() {$scope.type = $scope.type === 'PolarArea' ? 'Pie' : 'PolarArea';};  
// Fin valores requeridos
    $scope.nombre2  = 'Resultados de la Pregunta: xxxxxxxx';
    $scope.nombres  = 'Disponible';
    $scope.datos2   = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    $scope.series2  = ['Series A','Serie B','Serie C'];
    $scope.ejex2    = ['vot 1','vot 2','vot 3','vot 4','vot 5'];
    $scope.graficas ={};
    $scope.onClick  = function (points, evt) {
      console.log(points,evt);
    };

    $scope.pedirparametros = function(index) {
     $scope.Visible1=true;
     $scope.Visible2=false;
     console.log(index);
     // $scope.datos1    = [0,0,0,0,0];
     // $scope.datos0    = [0,0,0,0,0];
     $scope.Vp6=true;
     $scope.Vp7=false; 
     $scope.Vp70=true;$scope.Vp71=true;$scope.Vp72=true;
     $scope.Vp73=true;$scope.Vp74=true;$scope.Vp75=true;
     $scope.Vp76=true;$scope.Vp77=true;$scope.Vp78=true;
     $scope.Vp79=true;
     $scope.nombre_reporte='no ha seleccionado reporte';                
     console.log(index);
     $scope.csv=$scope.repdis[index].bcsv;
     console.log($scope.repdis[index].bcsv);  
     console.log($scope.csv);  
     $scope.nombre_reporte=$scope.repdis[index].nombre;  
     if (index === 0) {
      $scope.Vp0=false;$scope.Vp1=false;$scope.Vp2=false;
      $scope.Vp3=true;$scope.Vp4=true;$scope.Vp5=true;
      $scope.numrep=0;
      // $scope.nombre_reporte='Histórico de Pregunta por Materia';
     };
     if (index === 1) {
      $scope.Vp0=true;$scope.Vp1=false;$scope.Vp2=true;
      $scope.Vp3=false;$scope.Vp4=true;$scope.Vp5=true;
      $scope.numrep=1;
      // $scope.nombre_reporte='Histórico Completo de Materia';      
     }; 
     if (index === 2) {
      $scope.Vp0=true;$scope.Vp1=false;$scope.Vp2=true;
      $scope.Vp3=false;$scope.Vp4=true;$scope.Vp5=true;
      $scope.numrep=2;
      // $scope.nombre_reporte='Histórico Comparado de Materia';    
     };
     if (index === 3) {
      $scope.Vp0=true;$scope.Vp1=false;$scope.Vp2=true;
      $scope.Vp3=true;$scope.Vp4=false;$scope.Vp5=true;
      $scope.numrep=3;
      // $scope.nombre_reporte='Período Completo de Materia';
     }; 
     if (index === 4) {
      $scope.Vp0=true;$scope.Vp1=false;$scope.Vp2=true;
      $scope.Vp3=true;$scope.Vp4=false;$scope.Vp5=true;
      $scope.numrep=4;
      // $scope.nombre_reporte='Período Comparado de Materia';
     };
     if (index === 5) {
      $scope.Vp0=true;$scope.Vp1=true;$scope.Vp2=false;
      $scope.Vp3=true;$scope.Vp4=true;$scope.Vp5=false;
      $scope.numrep=5;
      // $scope.nombre_reporte='Histórico de Pregunta por Docente';
     }; 
     if (index === 6) {
      $scope.Vp0=true ;$scope.Vp1=true;$scope.Vp2=true;
      $scope.Vp3=false;$scope.Vp4=true;$scope.Vp5=false;
      $scope.numrep=6;
      // $scope.nombre_reporte='Histórico Completo de Docente';
     };
     if (index === 7) {
      $scope.Vp0=true ;$scope.Vp1=true;$scope.Vp2=true;
      $scope.Vp3=false;$scope.Vp4=true;$scope.Vp5=false;
      $scope.numrep=7;
      // $scope.nombre_reporte='Histórico Comparado de Docente';
     };
     if (index === 8) {
      $scope.Vp0=true;$scope.Vp1=true ;$scope.Vp2=true;
      $scope.Vp3=true;$scope.Vp4=false;$scope.Vp5=false;
      $scope.numrep=8;
      // $scope.nombre_reporte='Período Completo de Docente';
     };
     if (index === 9) {
      $scope.Vp0=true;$scope.Vp1=true ;$scope.Vp2=true;
      $scope.Vp3=true;$scope.Vp4=false;$scope.Vp5=false;
      $scope.numrep=9;
      // $scope.nombre_reporte='Período Comparado de Docente';
     };
    };
    $scope.pdfReporte = function(index) {
      $scope.Vp6=false;  
      $scope.Visible1=false;
      $scope.Visible2=true;  
      console.log($scope.preguntas);            
      if ($scope.numrep === 0) {
       $scope.repourl=API+'/reportes/historico_pregunta/materias/'+$scope.matsel+'/preguntas/'+$scope.presel+'.pdf';
      }
      if ($scope.numrep === 1) {
      $scope.repourl=API+'/reportes/historico_completo/materias/'+$scope.matsel+'/instrumentos/'+$scope.inssel+'.pdf';
      }
      if ($scope.numrep === 2) {
        $scope.repourl=API+'/reportes/historico_comparado/materias/'+$scope.matsel+'/instrumentos/'+$scope.inssel+'.json?ids[]=1&ids[]=2&ids[]=3';
      }
      if ($scope.numrep === 3) {
        $scope.repourl=API+'/reportes/periodo_completo/materias/'+$scope.matsel+'/periodos/'+$scope.persel+'.pdf';
      }
      if ($scope.numrep === 4) {
        $scope.repourl=API+'/reportes/periodo_comparado/materias/'+$scope.matsel+'/periodos/'+$scope.persel+'.json?ids[]=1&ids[]=2&ids[]=3';
      }
      if ($scope.numrep === 5) {
        $scope.repourl=API+'/reportes/historico_pregunta/docentes/'+$scope.docsel+'/preguntas/'+$scope.presel+'.pdf';
      } 
      if ($scope.numrep === 6) {
        $scope.repourl=API+'/reportes/historico_completo/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.pdf';
      }
      if ($scope.numrep === 7) {
        $scope.repourl=API+'/reportes/historico_comparado/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.json?ids[]=1&ids[]=2&ids[]=3';
      }
      if ($scope.numrep === 8) {
        $scope.repourl=API+'/reportes/periodo_completo/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.pdf';
      }
      if ($scope.numrep === 9) {
        $scope.repourl=API+'/reportes/periodo_comparado/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.json?ids[]=1&ids[]=2&ids[]=3';
        console.log($scope.repourl);
      };         
      $scope.docsel= 0;$scope.persel= 0;$scope.inssel= 0;$scope.carsel= 1;
      $scope.presel= 0;$scope.matsel= 0;
    };  

    $scope.csvReporte = function(index) {
      $scope.Vp6=false;  
      $scope.Visible1=false;
      $scope.Visible2=true;  
      if ($scope.numrep === 0) {
       $scope.repourl=API+'/reportes/historico_pregunta/materias/'+$scope.matsel+'/preguntas/'+$scope.presel+'.csv';
     }
     if ($scope.numrep === 1) {
      $scope.repourl=API+'/reportes/historico_completo/materias/'+$scope.matsel+'/instrumentos/'+$scope.inssel+'.csv';
      }
      if ($scope.numrep === 2) {
        $scope.repourl=API+'/reportes/historico_comparado/materias/'+$scope.matsel+'/instrumentos/'+$scope.inssel+'.csv';
      }
      if ($scope.numrep === 3) {
        $scope.repourl=API+'/reportes/periodo_completo/materias/'+$scope.matsel+'/periodos/'+$scope.persel+'.csv';
      }
      if ($scope.numrep === 4) {
        $scope.repourl=API+'/reportes/periodo_comparado/materias/'+$scope.matsel+'/periodos/'+$scope.persel+'.csv';  
      }
      if ($scope.numrep === 5) {
        $scope.repourl=API+'/reportes/historico_pregunta/docentes/'+$scope.docsel+'/preguntas/'+$scope.presel+'.csv';
      } 
      if ($scope.numrep === 6) {
        $scope.repourl=API+'/reportes/historico_completo/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.csv';
      }
      if ($scope.numrep === 7) {
        $scope.repourl=API+'/reportes/historico_comparado/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.csv';
      }
      if ($scope.numrep === 8) {
        $scope.repourl=API+'/reportes/periodo_completo/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.csv';
      }
      if ($scope.numrep === 9) {
        $scope.repourl=API+'/reportes/periodo_comparado/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.json?ids[]=1&ids[]=2&ids[]=3';
      };         
      $scope.docsel=0;$scope.persel=0;$scope.inssel=0;$scope.carsel=1;
      $scope.presel= 0;$scope.matsel= 0;
     }; 
    $scope.graReporte = function(index) {
      $scope.Vp7=false;
      $scope.Vp70=true;$scope.Vp71=true;$scope.Vp72=true;
      $scope.Vp73=true;$scope.Vp74=true;$scope.Vp75=true;
      $scope.Vp76=true;$scope.Vp77=true;$scope.Vp78=true;
      $scope.Vp79=true;
      $scope.Visible1=false;
      $scope.Visible2=true;  
      // $scope.gra_nom="'Histórico de Pregunta: ¿'+{{graficas.pregunta.interrogante}}+'? Materia: '+{{graficas.materia.codigo}}+{{graficas.materia.nombre}}";          
      if ($scope.numrep === 0) {

        $scope.graficas = GraR0.get({codigo: $scope.matsel ,id: $scope.presel});


$scope.Vp70=false; 

      }
      if ($scope.numrep === 1) {
        $scope.graficas = GraR1.get({codigo: $scope.matsel ,instrumento_id: $scope.inssel});
        // $scope.repourl=API+'/reportes/historico_completo/materias/'+$scope.matsel+'/instrumentos/'+$scope.inssel+'.json';
$scope.Vp71=false;
      }
      if ($scope.numrep === 2) {
        $scope.graficas = GraR2.get({codigo: $scope.matsel ,instrumento_id: $scope.inssel});
          // $scope.repourl=API+'/reportes/historico_comparado/materias/'+$scope.matsel+'/instrumentos/'+$scope.inssel+'.json?ids[]=1&ids[]=2&ids[]=3';
$scope.Vp72=false;
      }
      if ($scope.numrep === 3) {
        $scope.graficas = GraR3.get({codigo: $scope.matsel ,periodo: $scope.persel});

$scope.Vp73=false;
      }
      if ($scope.numrep === 4) {
// console.log($scope.persel);        
        $scope.graficas = GraR4.get({codigo_materia: $scope.matsel ,periodo: $scope.persel});
$scope.Vp74=false;
      }
      if ($scope.numrep === 5) {
        $scope.graficas = GraR5.get({cedula_docente: $scope.docsel ,pregunta_id: $scope.presel});
          // $scope.repourl=API+'/reportes/historico_pregunta/docentes/'+$scope.docsel+'/preguntas/'+$scope.presel+'.json';
$scope.Vp75=false;
      } 
      if ($scope.numrep === 6) {
        $scope.graficas = GraR6.get({cedula_docente: $scope.docsel ,instrumento_id: $scope.inssel});
          // $scope.repourl=API+'/reportes/historico_completo/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.json';
$scope.Vp76=false;
      }
      if ($scope.numrep === 7) {
        $scope.graficas = GraR7.get({cedula_docente: $scope.docsel ,instrumento_id: $scope.inssel});
          // $scope.repourl=API+'/reportes/historico_comparado/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.json?ids[]=1&ids[]=2&ids[]=3';
$scope.Vp77=false;
      }
      if ($scope.numrep === 8) {
        $scope.graficas = GraR8.get({cedula_docente: $scope.docsel ,periodo: $scope.persel});
          // $scope.repourl=API+'/reportes/periodo_completo/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.json';
$scope.Vp78=false;
      }
      if ($scope.numrep === 9) {
        $scope.graficas = GraR9.get({cedula_docente: $scope.docsel ,periodo: $scope.persel});
          // $scope.repourl=API+'/reportes/periodo_comparado/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.json?ids[]=1&ids[]=2&ids[]=3';
          console.log($scope.repourl);
$scope.Vp79=false;
      }; 
      $scope.grafica={};        
      $scope.docsel=0;$scope.persel=0;$scope.inssel=0;$scope.carsel=1;
      $scope.presel= 0;$scope.matsel= 0;
    }; 

      // $scope.asignavalor1 = function() {
      //   var parcial = 0;
      //   for(var bi = 0, nb = $scope.graficas.periodos.length; bi < nb; bi++) {
      //   // for(var bi = 0, nb = $scope.instrumento.bloques.length; bi < nb; bi++) {
      //       for(var pi = 0, np = $scope.graficas.periodos[bi].secciones.length; pi < np; pi++) {
      //       // for(var pi = 0, np = $scope.instrumento.bloques[bi].preguntas.length; pi < np; pi++) {                 
      //           var oi = 0; // index de la pregunta
      //           var no = $scope.graficas.periodos[bi].secciones[pi].totalizacion.length;
      //           // var no = $scope.instrumento.bloques[bi].preguntas[pi].opciones.length;                    
      //           for(oi = 0; oi < no; oi++) {
      //               parcial = $scope.graficas.periodos[bi].secciones[pi].totalizacion[oi];
      //               // $scope.datos1[oi]= $scope.datos1[oi]+parcial;
      //               // if($scope.instrumento.bloques[bi].preguntas[pi].opciones[oi] == opcion) { 
      //                   // indices = { "bloque_idx":bi, "pregunta_idx": pi, "opcion_idx": oi };
      //                   console.log(parcial);
      //                   console.log($scope.datos1[oi]);
      //                   return parcial;//return indices;
      //               // }
      //           }
      //       }
      //   }
      // };
      $scope.enviar = function() {
         $scope.Vp6=false;
      };        
      $scope.volver = function() {
         $scope.Visible1=false;
         $scope.Visible2=true;
         $scope.Vp0=true;$scope.Vp1=true;$scope.Vp2=true;$scope.Vp3=true;
         $scope.Vp4=true;$scope.Vp5=true;$scope.Vp6=true;$scope.Vp7=false;          
         $scope.docsel= 0;$scope.persel= 0;$scope.inssel= 0;
         $scope.carsel= 1;$scope.presel= 0;$scope.matsel= 0;           
      };
  }]);