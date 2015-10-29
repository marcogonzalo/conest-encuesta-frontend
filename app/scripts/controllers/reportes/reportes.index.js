'use strict';

angular.module('sedadApp')
    .controller('ReportesIndexCtrl', ['$scope','$http', 'SEDAD_API_V1_URL', 'LisMat', 'LisPre', 'LisCar', 'LisIns', 'LisPer', 'LisDoc', 'GraR0','GraR1','GraR2','GraR3','GraR4','GraR5','GraR6','GraR7','GraR8','GraR9', function ($scope,$http,API,LisMat,LisPre,LisCar,LisIns,LisPer,LisDoc,GraR0,GraR1,GraR2,GraR3,GraR4,GraR5,GraR6,GraR7,GraR8,GraR9){
        $scope.repdis = [
        {id:' 0',nombre:'Histórico de Pregunta por Materia',  
        pdcs:'(PDF/CSV)',
                    // rpdf:'http://localhost:3000/api/v1/reportes/historico_pregunta/materias/:codigo/preguntas/:id.pdf',               
                    // rcsv:'http://localhost:3000/api/v1/reportes/historico_pregunta/materias/:codigo/preguntas/:id.csv',
        bpdf: false,bcsv: false,grat: false,grar: false,gral: true,grab: true},
        {id:' 1',nombre:'Histórico Completo de Materia por Instrumento',      
        pdcs:'(PDF)',
                    // rpdf:'http://localhost:3000/api/v1/reportes/historico_completo/materias/:codigo/instrumentos/:instrumento_id.pdf',
                    // rcsv:'http://localhost:3000/api/v1/reportes/historico_completo/materias/:codigo/instrumentos/:instrumento_id.csv',
        bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true},
        {id:' 2',nombre:'Histórico Comparado de Materia',     
        pdcs:'(JSON)',
        // rpdf:'http://localhost:3000/api/v1/reportes/historico_comparado/materias/:codigo/instrumentos/:instrumento_id.pdf',     
        // rcsv:'http://localhost:3000/api/v1/reportes/historico_comparado/materias/:codigo/instrumentos/:instrumento_id.csv',
        bpdf: true,bcsv: true,grat: false,grar: true,gral: false,grab: false},    
        {id:' 3',nombre:'Histórico Completo de Materia por Período', 
        pdcs:'(PDF)',
        // rpdf:'http://localhost:3000/api/v1/reportes/periodo_completo/materias/:codigo/periodos/:periodo.pdf',                
        // rcsv:'http://localhost:3000/api/v1/reportes/periodo_completo/materias/:codigo/periodos/:periodo.csv',
        bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true},
        {id:' 4',nombre:'Comparado de Materia por Período',
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
        $scope.Visible1     = false;
        $scope.Visible2     = true;
        $scope.Vp1          = true;
        $scope.Vp2          = true;
        $scope.Vp3          = true;
        $scope.Vp4          = true;
        $scope.Vp5          = true;
        $scope.Vp6          = true;
        $scope.Vp7          = false;
        $scope.Vp70=true;$scope.Vp71=true;$scope.Vp72=true;
        $scope.Vp73=true;$scope.Vp74=true;$scope.Vp75=true;
        $scope.Vp76=true;$scope.Vp77=true;$scope.Vp78=true;
        $scope.Vp79=true;
        $scope.psel = [10,11,12];                
        $scope.numrep       = 0; // contiene el numero de reporte sel.
        $scope.tiprep       = 0; //pdf por defecto 
        $scope.repourl      = "";//contiene url del reporte sel.
        $scope.nombre_reporte='Seleccione Reporte';//contiene titulo del rep.
        $scope.nombre_rep = [];
        $scope.pdf          =false;
        $scope.csv          =false;
        $scope.gra          =false;
        $scope.etiquetas = ['Opción 1','Opción 2','Opción 3','Opción 4','Opción 5'];
        $scope.datos1    = [];
$scope.datosx    = [];
        $scope.series1   = [];
        $scope.ejex1     = [];//[['vot 1','vot 2','vot 3','vot 4','vot 5'],['','','','','']];
// Valores obligatorios requeridos por las graficas
        $scope.type      = 'PolarArea';
        $scope.toogle    = function() {$scope.type = $scope.type === 'PolarArea' ? 'Pie' : 'PolarArea';};  
// Fin valores requeridos
        $scope.nombre2  = 'Resultados de la Pregunta: xxxxxxxx';
        $scope.nombres  = 'Disponible';
        $scope.datos2   = [];
        $scope.series2  = [];
        $scope.ejex2    = [];
        $scope.valores ={};
        // $scope.ejex11=[];
        // $scope.series21=[];
        $scope.datos11=[];
        // $scope.datos21=[];
        $scope.nombre_rep=[];
        $scope.ind1 =0;
        $scope.ind2 =0;
        $scope.onClick  = function (points, evt) {
            console.log(points,evt);
        };

        $scope.pedirparametros = function(index) {
          $scope.Visible1=true;
          $scope.Visible2=false;
          console.log(index);
          $scope.datos1    = [];

          $scope.Vp6=true;
          $scope.Vp7=false; 
          $scope.Vp70=true;$scope.Vp71=true;$scope.Vp72=true;
          $scope.Vp73=true;$scope.Vp74=true;$scope.Vp75=true;
          $scope.Vp76=true;$scope.Vp77=true;$scope.Vp78=true;
          $scope.Vp79=true;
          $scope.nombre_reporte='no ha seleccionado reporte';                
          console.log(index);
          $scope.pdf=$scope.repdis[index].bpdf;
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



        $scope.pdfReporte = function() {
            $scope.Vp6=false;$scope.Visible1=false;$scope.Visible2=true;$scope.Vp7=false;
            $scope.Vp70=true;$scope.Vp71=true;$scope.Vp72=true;$scope.Vp73=true;$scope.Vp74=true;$scope.Vp75=true;
            $scope.Vp76=true;$scope.Vp77=true;$scope.Vp78=true;$scope.Vp79=true;
            $scope.datos1=[];
            $scope.datos2=[]; 

          if ($scope.numrep === 0) {
              $scope.repourl=API+'/reportes/historico_pregunta/materias/'+$scope.matsel+'/preguntas/'+$scope.presel+'.pdf';
                $scope.valores ={};
                    GraR0.get({codigo: $scope.matsel ,id: $scope.presel}, function(data){
                    $scope.valores = data;              
                    $scope.ejex01=[];
                    $scope.datos01=[];
                    $scope.datos02=[];
                    var t_sec_x_per = 1; 
                    var t_dat = 0; 
                    var a_limite=[];

                    for (var i = 0; i <= data.periodos.length-1; i++) {  

                        var periodo = data.periodos[i];
                        $scope.ejex01[i]=periodo.periodo;
                        t_dat = 0;
                        t_sec_x_per = periodo.secciones.length
                        // for (var j = periodo.secciones.length - 1; j >= 0; j--) {
                        for (var j  = 0; j <= periodo.secciones.length-1; j++) {       
                            var seccion = periodo.secciones[j];
                              t_dat += seccion.datos.media_de_seccion;
                        };
                        a_limite[i]= 5;
                        $scope.datos01.push(t_dat/t_sec_x_per);            
                    };
                        $scope.datos02.push($scope.datos01);
                });
              $scope.Vp70=false; 
            }
            if ($scope.numrep === 1) {
                $scope.repourl=API+'/reportes/historico_completo/materias/'+$scope.matsel+'/instrumentos/'+$scope.inssel+'.pdf';
                $scope.valores ={};
                GraR1.get({codigo: $scope.matsel ,instrumento_id: $scope.inssel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_materia_m="Materia: "+data.materia.codigo+' '+data.materia.nombre;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =[];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];
                                var t_sec_x_per = resultado.secciones.length;
                                nombre_pregunta_m="Pregunta: "+pregunta.interrogante;
                                nombre_x_m.push(resultado.periodo);
                                $scope.ejex11[o]=resultado.periodo;
                                t_dat = 0;
                                for (var j = resultado.secciones.length - 1; j >= 0; j--) {
                                    var seccion = resultado.secciones[j];
                                    t_dat += seccion.datos.media_de_seccion;
                                };
                                $scope.datos11.push(t_dat/t_sec_x_per);
                                a_limite[o]= 5;
                                $scope.nombre_rep=nombre_materia_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m;

                            };             
                            if (nombre_x_m.length == 0) {              
                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);
                                $scope.datosx1.push(datos_grafica_m);
                            };    
                        };
                    };
                });       
                $scope.Vp71=false;
            }

            if ($scope.numrep === 3) {
                $scope.repourl=API+'/reportes/periodo_completo/materias/'+$scope.matsel+'/periodos/'+$scope.persel+'.pdf';
                GraR3.get({codigo: $scope.matsel ,periodo: $scope.persel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_materia_m="Materia: "+data.materia.codigo+' '+data.materia.nombre;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =[];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];
                                var t_sec_x_per = resultado.secciones.length;
                                nombre_pregunta_m="Pregunta: "+pregunta.interrogante;

                                $scope.ejex11[o]=resultado.periodo;
                                t_dat = 0;
                                for (var j = resultado.secciones.length - 1; j >= 0; j--) {
                                    var seccion = resultado.secciones[j];
                                    nombre_x_m.push('Secc: '+seccion.seccion);

                                    $scope.datos11.push(seccion.datos.media_de_seccion);
                                };

                                a_limite[o]= 5;
                                $scope.nombre_rep=nombre_materia_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m;

                            };             
                            if (nombre_x_m.length == 0) {              
                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);
                                $scope.datosx1.push(datos_grafica_m);
                            };    
                        };
                    };
                });

                $scope.Vp73=false;
            }

            if ($scope.numrep === 5) {
                $scope.repourl=API+'/reportes/historico_pregunta/docentes/'+$scope.docsel+'/preguntas/'+$scope.presel+'.pdf';
                $scope.valores ={};
                GraR5.get({cedula_docente: $scope.docsel ,pregunta_id: $scope.presel}, function(data){
                    $scope.valores = data;
                    $scope.ejex51=[];
                    $scope.datos51=[];
                    $scope.datos52=[];
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    for (var i = 0; i <= data.periodos.length-1; i++) {            
                        var periodo = data.periodos[i];
                        $scope.ejex51[i]=periodo.periodo;
                        console.log(i);
                        console.log($scope.ejex51);

                        for (var j = 0; j <= periodo.materias.length-1; j++) {              
                            var materia = periodo.materias[j];
                            t_dat = 0;
                            t_sec_x_per = materia.secciones.length;
                            
                            for (var k = 0; k <= materia.secciones.length-1; k++) { 

                                var seccion = materia.secciones[k];
                                t_dat += seccion.datos.media_de_seccion;
                            };
                        };
                        a_limite[i]= 5;
                        $scope.datos51.push(t_dat/t_sec_x_per); 
                        console.log($scope.datos51);
                    };

                        $scope.datos52.push($scope.datos51);
                });
            $scope.Vp75=false;
            } 
            if ($scope.numrep === 6) {
                $scope.repourl=API+'/reportes/historico_completo/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.pdf';
                GraR6.get({cedula_docente: $scope.docsel ,instrumento_id: $scope.inssel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_docente_m="Docente: "+data.docente.cedula+' '+data.docente.nombre_completo;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =[];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];

                                $scope.ejex11[o]=resultado.periodo;

                                for (var q = resultado.materias.length - 1; q >= 0; q--) {
                                    var mat = resultado.materias[q];
                                    var t_sec_x_per = mat.secciones.length;
                                    nombre_pregunta_m="Pregunta: "+pregunta.interrogante;
                                    nombre_x_m.push(mat.periodo);

                                    t_dat = 0;

                                    for (var j = mat.secciones.length - 1; j >= 0; j--) {
                                    var seccion = mat.secciones[j];
                                    t_dat += seccion.datos.media_de_seccion;
                                    };

                                };

                                $scope.datos11.push(t_dat/t_sec_x_per);
                                a_limite[q]= 5;
                                $scope.nombre_rep=nombre_docente_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m;

                            };  
              
                            if ($scope.datos11.length == 0) {  


                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);

                                $scope.datosx1.push(datos_grafica_m);
                                
                                
                            };    
                        };
                    }; 
                }); 
                $scope.Vp76=false;
            }

            if ($scope.numrep === 8) {
                $scope.repourl=API+'/reportes/periodo_completo/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.pdf';
                  GraR8.get({cedula_docente: $scope.docsel ,periodo: $scope.persel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_docente_m="Docente: "+data.docente.cedula+' '+data.docente.nombre_completo;
                    var nombre_periodo_m="Período: "+data.periodo;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var valor_media_m=0;
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =['votos=1','votos=2','votos=3','votos=4','votos=5'];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];
                                for (var q = resultado.materias.length - 1; q >= 0; q--) {
                                    var mat = resultado.materias[q];
                                    var t_sec_x_per = mat.secciones.length;
                                    nombre_pregunta_m="Pregunta: "+pregunta.interrogante;
                                    nombre_x_m.push(mat.periodo);
                                    t_dat = 0;
                                    for (var j = mat.secciones.length - 1; j >= 0; j--) {
                                    var seccion = mat.secciones[j];

                                    valor_media_m = seccion.datos.media_de_seccion;
                                        for (var a = 0; a <= seccion.totalizacion.length - 1; a++) {  
                                        var tot = seccion.totalizacion[a];
                                        $scope.datos11.push(tot.total);
                                        };
                                    };
                                };
                                $scope.nombre_rep=nombre_docente_m+"-"+nombre_periodo_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m+"-Media: "+valor_media_m;
                            };  
                            if ($scope.datos11.length == 0) {  
                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);
                                $scope.datosx1.push(datos_grafica_m);
                            };    
                        };
                    };
                });
                $scope.Vp78=false;
            }
                  
            $scope.docsel= 0;$scope.persel= 0;$scope.inssel= 0;$scope.carsel= 1;
            $scope.presel= 0;$scope.matsel= 0;
        };  

        $scope.csvReporte = function() {
            $scope.Vp6=false;  
            $scope.Visible1=false;
            $scope.Visible2=true;  
            $scope.datos1    = [];
            $scope.datos2    = [];
            if ($scope.numrep === 0) {
              $scope.repourl=API+'/reportes/historico_pregunta/materias/'+$scope.matsel+'/preguntas/'+$scope.presel+'.csv';
                $scope.valores ={};
                    GraR0.get({codigo: $scope.matsel ,id: $scope.presel}, function(data){
                    $scope.valores = data;              
                    $scope.ejex01=[];
                    $scope.datos01=[];
                    $scope.datos02=[];
                    var t_sec_x_per = 1; 
                    var t_dat = 0; 
                    var a_limite=[];

                    for (var i = 0; i <= data.periodos.length-1; i++) {  

                        var periodo = data.periodos[i];
                        $scope.ejex01[i]=periodo.periodo;
                        t_dat = 0;
                        t_sec_x_per = periodo.secciones.length
                        // for (var j = periodo.secciones.length - 1; j >= 0; j--) {
                        for (var j  = 0; j <= periodo.secciones.length-1; j++) {       
                            var seccion = periodo.secciones[j];
                              t_dat += seccion.datos.media_de_seccion;
                        };
                        a_limite[i]= 5;
                        $scope.datos01.push(t_dat/t_sec_x_per);            
                    };
                        $scope.datos02.push($scope.datos01);

                });
              $scope.Vp70=false; 
          }
            if ($scope.numrep === 3) {
                $scope.repourl=API+'/reportes/periodo_completo/materias/'+$scope.matsel+'/periodos/'+$scope.persel+'.csv';
                $scope.valores ={};
                GraR3.get({codigo: $scope.matsel ,periodo: $scope.persel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_materia_m="Materia: "+data.materia.codigo+' '+data.materia.nombre;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =[];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];
                                var t_sec_x_per = resultado.secciones.length;
                                nombre_pregunta_m="Pregunta: "+pregunta.interrogante;

                                $scope.ejex11[o]=resultado.periodo;
                                t_dat = 0;
                                for (var j = resultado.secciones.length - 1; j >= 0; j--) {
                                    var seccion = resultado.secciones[j];
                                    nombre_x_m.push('Secc: '+seccion.seccion);

                                    $scope.datos11.push(seccion.datos.media_de_seccion);
                                };

                                a_limite[o]= 5;
                                $scope.nombre_rep=nombre_materia_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m;

                            };             
                            if (nombre_x_m.length == 0) {              
                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);
                                $scope.datosx1.push(datos_grafica_m);
                            };    
                        };
                    };
                });

                $scope.Vp73=false;
            }
            if ($scope.numrep === 5) {
                $scope.repourl=API+'/reportes/historico_pregunta/docentes/'+$scope.docsel+'/preguntas/'+$scope.presel+'.csv';
                $scope.valores ={};
                GraR5.get({cedula_docente: $scope.docsel ,pregunta_id: $scope.presel}, function(data){
                    $scope.valores = data;
                    $scope.ejex51=[];
                    $scope.datos51=[];
                    $scope.datos52=[];
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    for (var i = 0; i <= data.periodos.length-1; i++) {            
                        var periodo = data.periodos[i];
                        $scope.ejex51[i]=periodo.periodo;
                        console.log(i);
                        console.log($scope.ejex51);

                        for (var j = 0; j <= periodo.materias.length-1; j++) {              
                            var materia = periodo.materias[j];
                            t_dat = 0;
                            t_sec_x_per = materia.secciones.length;
                            
                            for (var k = 0; k <= materia.secciones.length-1; k++) { 

                                var seccion = materia.secciones[k];
                                t_dat += seccion.datos.media_de_seccion;
                            };
                        };
                        a_limite[i]= 5;
                        $scope.datos51.push(t_dat/t_sec_x_per); 
                        console.log($scope.datos51);
                    };

                        $scope.datos52.push($scope.datos51);
                });
            $scope.Vp75=false;
            } 
                
            $scope.docsel=0;$scope.persel=0;$scope.inssel=0;$scope.carsel=1;
            $scope.presel= 0;$scope.matsel= 0;
          }; 
        $scope.graReporte = function() {
            $scope.Vp7=false;
            $scope.Vp70=true;$scope.Vp71=true;$scope.Vp72=true;
            $scope.Vp73=true;$scope.Vp74=true;$scope.Vp75=true;
            $scope.Vp76=true;$scope.Vp77=true;$scope.Vp78=true;
            $scope.Vp79=true;
            $scope.Visible1=false;
            $scope.Visible2=true;  

            if ($scope.numrep === 0) {
                    GraR0.get({codigo: $scope.matsel ,id: $scope.presel}, function(data){
                    $scope.valores = data;              
                    $scope.ejex01=[];
                    $scope.datos01=[];
                    $scope.datos02=[];
                    var t_sec_x_per = 1; 
                    var t_dat = 0; 
                    var a_limite=[];

                    for (var i = 0; i <= data.periodos.length-1; i++) {  

                        var periodo = data.periodos[i];
                        $scope.ejex01[i]=periodo.periodo;
                        t_dat = 0;
                        t_sec_x_per = periodo.secciones.length
                        // for (var j = periodo.secciones.length - 1; j >= 0; j--) {
                        for (var j  = 0; j <= periodo.secciones.length-1; j++) {       
                            var seccion = periodo.secciones[j];
                              t_dat += seccion.datos.media_de_seccion;
                        };
                        a_limite[i]= 5;
                        $scope.datos01.push(t_dat/t_sec_x_per);            
                    };
                        $scope.datos02.push($scope.datos01);

                });
                $scope.Vp70=false;
            }

            if ($scope.numrep === 1) {
                GraR1.get({codigo: $scope.matsel ,instrumento_id: $scope.inssel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_materia_m="Materia: "+data.materia.codigo+' '+data.materia.nombre;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =[];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];
                                var t_sec_x_per = resultado.secciones.length;
                                nombre_pregunta_m="Pregunta: "+pregunta.interrogante;
                                nombre_x_m.push(resultado.periodo);
                                $scope.ejex11[o]=resultado.periodo;
                                t_dat = 0;
                                for (var j = resultado.secciones.length - 1; j >= 0; j--) {
                                    var seccion = resultado.secciones[j];
                                    t_dat += seccion.datos.media_de_seccion;
                                };
                                $scope.datos11.push(t_dat/t_sec_x_per);
                                a_limite[o]= 5;
                                $scope.nombre_rep=nombre_materia_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m;

                            };             
                            if (nombre_x_m.length == 0) {              
                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);
                                $scope.datosx1.push(datos_grafica_m);
                            };    
                        };
                    };
                    console.log($scope.datosx1);
                });

                $scope.Vp71=false;
            }

            if ($scope.numrep === 2) {

                GraR2.get({codigo: $scope.matsel ,instrumento_id: $scope.inssel, ids: $scope.psel}, function(data){
                    $scope.valores = data;
//por hacer

                }); 

              $scope.Vp72=false;
            }
            if ($scope.numrep === 3) {
                $scope.valores ={};
                GraR3.get({codigo: $scope.matsel ,periodo: $scope.persel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_materia_m="Materia: "+data.materia.codigo+' '+data.materia.nombre;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =[];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];
                                var t_sec_x_per = resultado.secciones.length;
                                nombre_pregunta_m="Pregunta: "+pregunta.interrogante;

                                $scope.ejex11[o]=resultado.periodo;
                                t_dat = 0;
                                for (var j = resultado.secciones.length - 1; j >= 0; j--) {
                                    var seccion = resultado.secciones[j];
                                    nombre_x_m.push('Secc: '+seccion.seccion);

                                    $scope.datos11.push(seccion.datos.media_de_seccion);
                                };

                                a_limite[o]= 5;
                                $scope.nombre_rep=nombre_materia_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m;

                            };             
                            if (nombre_x_m.length == 0) {              
                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);
                                $scope.datosx1.push(datos_grafica_m);
                            };    
                        };
                    };
                    console.log($scope.datosx1);
                });

                $scope.Vp73=false;
              
            }
            
            if ($scope.numrep === 4) {

                            GraR4.get({codigo: $scope.matsel ,periodo: $scope.persel, ids: $scope.psel}, function(data){
                                $scope.valores = data;
                                console.log($scope.valores);
  // por hacer
                            });
                $scope.Vp74=false;
            }
            if ($scope.numrep === 5) {
                $scope.valores ={};
                GraR5.get({cedula_docente: $scope.docsel ,pregunta_id: $scope.presel}, function(data){
                    $scope.valores = data;
                    $scope.ejex51=[];
                    $scope.datos51=[];
                    $scope.datos52=[];
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    for (var i = 0; i <= data.periodos.length-1; i++) {            
                        var periodo = data.periodos[i];
                        $scope.ejex51[i]=periodo.periodo;
                        console.log(i);
                        console.log($scope.ejex51);

                        for (var j = 0; j <= periodo.materias.length-1; j++) {              
                            var materia = periodo.materias[j];
                            t_dat = 0;
                            t_sec_x_per = materia.secciones.length;
                            
                            for (var k = 0; k <= materia.secciones.length-1; k++) { 

                                var seccion = materia.secciones[k];
                                t_dat += seccion.datos.media_de_seccion;
                            };
                        };
                        a_limite[i]= 5;
                        $scope.datos51.push(t_dat/t_sec_x_per); 
                        console.log($scope.datos51);
                    };

                        $scope.datos52.push($scope.datos51);
                });
            $scope.Vp75=false;
            } 

            if ($scope.numrep === 6) {

                GraR6.get({cedula_docente: $scope.docsel ,instrumento_id: $scope.inssel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_docente_m="Docente: "+data.docente.cedula+' '+data.docente.nombre_completo;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =[];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];

                                $scope.ejex11[o]=resultado.periodo;

                                for (var q = resultado.materias.length - 1; q >= 0; q--) {
                                    var mat = resultado.materias[q];
                                    var t_sec_x_per = mat.secciones.length;
                                    nombre_pregunta_m="Pregunta: "+pregunta.interrogante;
                                    nombre_x_m.push(mat.periodo);

                                    t_dat = 0;

                                    for (var j = mat.secciones.length - 1; j >= 0; j--) {
                                    var seccion = mat.secciones[j];
                                    t_dat += seccion.datos.media_de_seccion;
                                    };

                                };

                                $scope.datos11.push(t_dat/t_sec_x_per);
                                a_limite[q]= 5;
                                $scope.nombre_rep=nombre_docente_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m;

                            };  
              
                            if ($scope.datos11.length == 0) {  


                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);

                                $scope.datosx1.push(datos_grafica_m);
                                
                                
                            };    
                        };
                    };
                    
                });
                $scope.Vp76=false;
            }

            if ($scope.numrep === 7) {
                         
                GraR7.get({cedula_docente: $scope.docsel ,instrumento_id: $scope.inssel}, function(data){
                // $scope.repourl=API+'/reportes/historico_comparado/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.json?ids[]=1&ids[]=2&ids[]=3';
                $scope.valores = data;
                }) ;
                    
            $scope.Vp77=false;
            }

            if ($scope.numrep === 8) {
                GraR8.get({cedula_docente: $scope.docsel ,periodo: $scope.persel}, function(data){
                    $scope.valores = data;
                    $scope.datosx1= [];  
                    $scope.datos11=[]; 
                    $scope.ejex11 =[];        
                    $scope.nombre_rep="";
                    var t_sec_x_per = 1;
                    var t_dat = 0;
                    var a_limite=[];
                    var nombre_docente_m="Docente: "+data.docente.cedula+' '+data.docente.nombre_completo;
                    var nombre_periodo_m="Período: "+data.periodo;
                    var nombre_instrumento_m="Instrumento: "+data.instrumento.nombre;
                    var nombre_bloque_m="";
                    var nombre_pregunta_m="";
                    var valor_media_m=0;
                    var nombre_x_m=[];
                    var datos_grafica_m=[];
                    for (var m = data.instrumento.bloques.length - 1; m >= 0; m--) {
                        var bloque = data.instrumento.bloques[m];
                        nombre_bloque_m="Bloque: "+bloque.nombre;
                        for (var n = bloque.preguntas.length - 1; n >= 0; n--) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            $scope.datos11=[];
                            $scope.ejex11 =['votos=1','votos=2','votos=3','votos=4','votos=5'];
                            nombre_x_m=[];
                            for (var o = pregunta.resultados.length - 1; o >= 0; o--) {
                                var resultado = pregunta.resultados[o];
                                for (var q = resultado.materias.length - 1; q >= 0; q--) {
                                    var mat = resultado.materias[q];
                                    var t_sec_x_per = mat.secciones.length;
                                    nombre_pregunta_m="Pregunta: "+pregunta.interrogante;
                                    nombre_x_m.push(mat.periodo);
                                    t_dat = 0;
                                    for (var j = mat.secciones.length - 1; j >= 0; j--) {
                                    var seccion = mat.secciones[j];

                                    valor_media_m = seccion.datos.media_de_seccion;
                                        for (var a = 0; a <= seccion.totalizacion.length - 1; a++) {  
                                        var tot = seccion.totalizacion[a];
                                        $scope.datos11.push(tot.total);
                                        };
                                    };
                                };
                                $scope.nombre_rep=nombre_docente_m+"-"+nombre_periodo_m+"-"+nombre_instrumento_m+"-"+nombre_bloque_m+"-"+nombre_pregunta_m+"-Media: "+valor_media_m;
                            };  
                            if ($scope.datos11.length == 0) {  
                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push($scope.nombre_rep,nombre_x_m,$scope.datos11,$scope.ejex11);
                                $scope.datosx1.push(datos_grafica_m);
                            };    
                        };
                    };
                });
            $scope.Vp78=false;
            }
            if ($scope.numrep === 9) {
                         
                $scope.valores = GraR9.get({cedula_docente: $scope.docsel ,periodo: $scope.persel}, function(data){
                });
                    // $scope.repourl=API+'/reportes/periodo_comparado/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.json?ids[]=1&ids[]=2&ids[]=3';
            $scope.Vp79=false;
            };

            $scope.valores={};        
            $scope.docsel=0;$scope.persel=0;$scope.inssel=0;$scope.carsel=1;
            $scope.presel= 0;$scope.matsel= 0;
        }; 

            $scope.enviar = function() {
                  $scope.Vp6=false;
            };        
            $scope.volver = function() {
              $scope.Visible1=false;$scope.Visible2=true;
              $scope.Vp0=true;$scope.Vp1=true;$scope.Vp2=true;$scope.Vp3=true;
              $scope.Vp4=true;$scope.Vp5=true;$scope.Vp6=true;$scope.Vp7=false;          
              $scope.docsel= 0;$scope.persel= 0;$scope.inssel= 0;
              $scope.carsel= 1;$scope.presel= 0;$scope.matsel= 0;           
            };
    }]);