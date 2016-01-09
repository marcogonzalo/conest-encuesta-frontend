'use strict';
 
angular.module('sedadApp')
    .controller('ReportesIndexCtrl', ['$scope','$http', 'SEDAD_API_V1_URL', 'LisMat', 'LisPre', 'LisCar', 'LisIns', 'LisPer', 'LisDoc', 'GraR0','GraR1','GraR2','GraR3','GraR4','GraR5','GraR6','GraR7','GraR8','GraR9', function ($scope,$http,API,LisMat,LisPre,LisCar,LisIns,LisPer,LisDoc,GraR0,GraR1,GraR2,GraR3,GraR4,GraR5,GraR6,GraR7,GraR8,GraR9){
        $scope.repdis = [
        {id:' 0',nombre:'Histórico de Pregunta por Materia',  
        pdcs:'(PDF/CSV)',
        bpdf: false,bcsv: false,grat: false,grar: false,gral: true,grab: true},
        {id:' 1',nombre:'Histórico Completo de Materia por Instrumento',      
        pdcs:'(PDF)',
        bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true},
        {id:' 2',nombre:'Histórico Comparado de Materia',     
        pdcs:'(JSON)',
        bpdf: true,bcsv: true,grat: false,grar: true,gral: false,grab: false},    
        {id:' 3',nombre:'Período Completo de Materia', 
        pdcs:'(PDF)',
        bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true},
        {id:' 4',nombre:'Comparado de Materia por Período',
        pdcs:'(PDF)',
        bpdf: false,bcsv: true,grat: true,grar: true,gral: false,grab: false},     
        {id:' 5',nombre:'Histórico de Pregunta por Docente',
        pdcs:'(PDF/CSV)',
        bpdf: false,bcsv: false,grat: false,grar: false,gral: true,grab: true},
        {id:' 6',nombre:'Histórico Completo de Docente',
        pdcs:'(PDF)',
        bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true},   
        {id:' 7',nombre:'Histórico Comparado de Docente',
        pdcs:'(PDF)',
        bpdf: false,bcsv: true,grat: true,grar: true,gral: false,grab: false},    
        {id:' 8',nombre:'Período Completo de Docente',
        pdcs:'(PDF)',
        bpdf: false,bcsv: true,grat: false,grar: false,gral: true,grab: true}, 
        {id:' 9',nombre:'Período Comparado de Docente',
        pdcs:'(PDF)',
        bpdf: false,bcsv: true,grat: true,grar: true,gral: false,grab: false}, 
        ];
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };
// 
//------------------------------------------------
// Query's a las tablas básicas
//------------------------------------------------   
        $scope.docentes     = LisDoc.query();$scope.docsel       = 0;
        $scope.periodos     = LisPer.query();$scope.persel       = 0;
        $scope.instrumentos = LisIns.query();$scope.inssel       = 0;
        $scope.carreras     = LisCar.query();$scope.carsel       = 1;//  ''
        $scope.preguntas    = LisPre.query();$scope.presel       = 0; //pregunta
        $scope.materias     = LisMat.query({id: $scope.carsel});$scope.presel       = 0;
        $scope.a_periodos_t = [];//arreglo temporal de periodos

//------------------------------------------------
// Variables lógicas para habilitar en la vista
//------------------------------------------------ 
        $scope.Visible1     = false;//false habilita la vista de la Tabla de Rep
        $scope.Visible2     = true; //false habilita la sección de datos requeridos
        $scope.Vp1          = true; //false habilita menú de materias
        $scope.Vp2          = true; //false habilita menú de preguntas
        $scope.Vp3          = true; //false habilita menú de instrumentos
        $scope.Vp4          = true; //false habilita menú de períodos académicos
        $scope.Vp5          = true; //false habilita menú de docentes
        $scope.Vp6          = true; //false habilita menú de instrumentos
        $scope.Vp61         = true; //false habilita menú de 1ra pregunta comparar
        $scope.Vp62         = true; //false habilita menú de 2da pregunta comparar
        $scope.Vp63         = true; //false habilita menú de 3ra pregunta comparar
        $scope.Vp7          = false;//false habilita sección de vista de gráficas 
        $scope.Vp70         = true; //false habilita gráficas 0-Histórico de Pregunta por Materia
        $scope.Vp71         = true; //false habilita gráficas 1-Histórico Completo de Materia por Instrumento
        $scope.Vp72         = true; //false habilita gráficas 2-Histórico Comparado de Materia
        $scope.Vp73         = true; //false habilita gráficas 3-Histórico Completo de Materia por Período
        $scope.Vp74         = true; //false habilita gráficas 4-Comparado de Materia por Período
        $scope.Vp75         = true; //false habilita gráficas 5-Histórico de Pregunta por Docente
        $scope.Vp76         = true; //false habilita gráficas 6-Histórico Completo de Docente
        $scope.Vp77         = true; //false habilita gráficas 7-Histórico Comparado de Docente
        $scope.Vp78         = true; //false habilita gráficas 8-Período Completo de Docente
        $scope.Vp79         = true; //false habilita gráficas 9-Período Comparado de Docente
        $scope.pdf          =false; //false habilita boton para emisión pdf
        $scope.csv          =false; //false habilita boton para emisión csv
//------------------------------------------------
// Parámetros globales
//------------------------------------------------ 
        $scope.idssel       = [];   // contiene los ids
        $scope.idssel1      = 0;    //primer   parametro de comparado x pregunta
        $scope.idssel2      = 0;    //segundo  parametro de comparado x pregunta
        $scope.idssel3      = 0;    //tercer   parametro de comparado x pregunta
        $scope.numrep       = 0;    //contiene el numero de reporte seleccionado
        $scope.tiprep       = 0;    //tipo de reporte seleccionado,pdf por defecto 
        $scope.repourl      = "";   //contiene url del reporte sel.
        $scope.nombre_reporte='Seleccione Reporte';//contiene titulo del rep.
        $scope.nombre_rep   = [];
        $scope.series       = [];   //contiene identificación de la serie
        $scope.n_materia    = "";   //nombre de materia
        $scope.n_instrumento= "";   //nombre de instrumento
        $scope.n_bloque     = "";   //nombre de bloque
        $scope.n_docente    = "";   //nombre de docente
        $scope.n_periodo    = "";   //nombre de periodo
        $scope.n_pregunta   = "";   //nombre de pregunta
        $scope.n_pregunta_a = [];   //arreglo de nombres de preguntas
        $scope.gra_dat      = [];   //arreglo de datos 
        $scope.gra_dat_t    = [];   //arreglo de datos temporal
$scope.valores      = {};


$scope.series_line =[
'La densidad de contenidos es asimilable en un trimestre',
'Dotación de la universidad de materiales y equipos requeridos',
'¿Expuso claramente el programa al inicio del curso?'
// '¿Informó con precisión sobre el proceso de evaluación?',
// 'Le dedicó el tiempo apropiado a cada tema del programa'
];

$scope.datos_line = [

[1,2 ,3,4,5 ,6],
[1,2 ,3,4,5 ,6],
[1,2 ,3,4,5 ,6],
// [1,2 ,3,4,5 ,6],
// [1,2 ,3,4,5 ,6],
            ];

$scope.etiquetas_line = [
["1","2","3","4","5","6"]
// ,
// ["1","2","3","4","5","6","7"],
// ["2","3","4","5","6","7"]
];









//------------------------------------------------
// Valores obligatorios requeridos por las graficas
//------------------------------------------------ 
        $scope.type      = 'PolarArea';
        $scope.toogle    = function() {$scope.type = $scope.type === 'PolarArea' ? 'Pie' : 'PolarArea';};  
// Fin valores requeridos

// $scope.ejex11=[];
// $scope.series21=[];
        $scope.datos11=[];
        $scope.datos21=[];
        $scope.nombre_rep=[];
        $scope.ind1 =0;
        $scope.ind2 =0;

        $scope.onClick  = function (points, evt) {
            console.log(points,evt);
        };
        $scope.pedirparametros = function(index) {
         $scope.iniciar();
          $scope.Visible1=true;
          $scope.Visible2=false;
          $scope.docsel       = 0;
          $scope.persel       = 0;
          $scope.inssel       = 0;
          $scope.carsel       = 1;//  ''
          $scope.presel       = 0; //pregunta
          $scope.matsel       = 0;
          $scope.nombre_reporte='no ha seleccionado reporte';                
          $scope.pdf=$scope.repdis[index].bpdf;
          $scope.csv=$scope.repdis[index].bcsv;
          $scope.numrep=10; 
          $scope.nombre_reporte=$scope.repdis[index].nombre;         
          if (index === 0) {
           $scope.Vp0=false;
           $scope.Vp1=false;
           $scope.Vp2=false;
           $scope.numrep=0;
          };
          if (index === 1) {
           $scope.Vp1=false;
           $scope.Vp3=false;
           $scope.numrep=1; 
          }; 
          if (index === 2) {
           $scope.Vp1=false;
           $scope.Vp3=false;
           $scope.Vp61=false;
           $scope.Vp62=false;
           $scope.Vp63=false;
           $scope.numrep=2;
          };
          if (index === 3) {
            $scope.Vp1=false; 
            $scope.Vp4=false;
            $scope.numrep=3;
          }; 
          if (index === 4) {
           $scope.Vp1 =false;
           $scope.Vp4 =false;
           $scope.Vp61=false;
           $scope.Vp62=false;
           $scope.Vp63=false;
           $scope.numrep=4;
          };
          if (index === 5) {
            $scope.Vp2=false;
            $scope.Vp5=false;
            $scope.numrep=5;
          }; 
          if (index === 6) {
            $scope.Vp3=false;
            $scope.Vp5=false;
            $scope.numrep=6;
          };
          if (index === 7) {
            $scope.Vp3=false;
            $scope.Vp5=false;
            $scope.Vp61=false;
            $scope.Vp62=false;
            $scope.Vp63=false; 
            $scope.numrep=7;
          };
          if (index === 8) {
            $scope.Vp4=false;
            $scope.Vp5=false;
            $scope.numrep=8;
          };
          if (index === 9) {
            $scope.Vp4=false;
            $scope.Vp5=false;
            $scope.Vp61=false;
            $scope.Vp62=false;
            $scope.Vp63=false;
            $scope.numrep=9;
          };
        };
        $scope.pdfReporte = function() {
          $scope.iniciar();
          $scope.Vp6=false;$scope.Visible1=false;
          $scope.Vp7=false;
          $scope.Visible2=true;
          // $scope.Vp70=true;$scope.Vp71=true;$scope.Vp72=true;$scope.Vp73=true;
          // $scope.Vp74=true;$scope.Vp75=true;
          // $scope.Vp76=true;$scope.Vp77=true;$scope.Vp78=true;$scope.Vp79=true;
          $scope.Vp61=true;$scope.Vp62=true;$scope.Vp63=true;
          if ($scope.numrep === 0) {
              $scope.repourl=API+'/reportes/historico_pregunta/materias/'+
              $scope.matsel+'/preguntas/'+$scope.presel+'.pdf';
              $scope.graReporte();
            }
            if ($scope.numrep === 1) {
                $scope.repourl=API+'/reportes/historico_completo/materias/'+
                $scope.matsel+'/instrumentos/'+$scope.inssel+'.pdf';
                $scope.graReporte();
            }
            if ($scope.numrep === 3) {
                $scope.repourl=API+'/reportes/periodo_completo/materias/'+
                $scope.matsel+'/periodos/'+$scope.persel+'.pdf';
                $scope.graReporte();
            }
            if ($scope.numrep === 5) {
                $scope.repourl=API+'/reportes/historico_pregunta/docentes/'+
                $scope.docsel+'/preguntas/'+$scope.presel+'.pdf';
                $scope.graReporte();
            } 
            if ($scope.numrep === 6) {
                $scope.repourl=API+'/reportes/historico_completo/docentes/'+
                $scope.docsel+'/instrumentos/'+$scope.inssel+'.pdf';
                $scope.graReporte();
            }
            if ($scope.numrep === 8) {
                $scope.repourl=API+'/reportes/periodo_completo/docentes/'+
                $scope.docsel+'/periodos/'+$scope.persel+'.pdf';
                $scope.graReporte();
            }
            $scope.Vp6=false;      
            $scope.docsel=0;$scope.persel=0;$scope.inssel=0;$scope.carsel=1;
            $scope.presel=0;$scope.matsel=0;
        };
        $scope.csvReporte = function() {
            $scope.iniciar();
            $scope.Vp6=false; 
            $scope.Visible1=false;
            if ($scope.numrep === 0) {
              $scope.repourl=API+'/reportes/historico_pregunta/materias/'+
              $scope.matsel+'/preguntas/'+$scope.presel+'.csv';
              $scope.graReporte();
            }
            if ($scope.numrep === 3) {
              $scope.repourl=API+'/reportes/periodo_completo/materias/'+
              $scope.matsel+'/periodos/'+$scope.persel+'.csv';
              $scope.graReporte();
            }
            if ($scope.numrep === 5) {
              $scope.repourl=API+'/reportes/historico_pregunta/docentes/'+
              $scope.docsel+'/preguntas/'+$scope.presel+'.csv';
              $scope.graReporte();
            }
            $scope.Vp6=false;
            $scope.docsel=0;$scope.persel=0;$scope.inssel=0;$scope.carsel=1;
            $scope.presel=0;$scope.matsel= 0;
          };
        $scope.graReporte = function() {
            $scope.iniciar();
            $scope.Visible1=false;
            $scope.Visible2=true;  
            $scope.series=[];
//---------------------------------------------------------------------------------------------
//Construcción de la vista para reporte:    0-Histórico de Pregunta por Materia
//-------------------------------------
//Se requiere garantizar la data ordenada por período, es por ello que se utilizan
//          métodos para la manipulación de strings como substr, concat, sort, join.
//Variables utilizadas: 
//--------------------
//          GraR0.get     = Indica el servicio del reporte 0 que a través del método get
//                          realiza la petición al servidor retornando un json el cual puede
//                          ser referenciado en data.
//                          url: 'http://localhost:3000/api/v1/reportes/historico_pregunta/
//                          materias/:codigo/preguntas/:id.pdf'
//          $scope.matsel = codigo de materia seleccionada
//          $scope.presel = id de pregunta seleccionada 
//          $scope.gra_dat= Arreglo definitiva que contiene los datos a graficar 
//          $scope.n_materia = nombre de la materia 
//          $scope.series = contiene la pregunta 
//          $scope.ejex01 = Arreglo simple contentivo de Las etiquetas de la gráfica. Estas
//                          se construyen:
//                          1ro. Invirtiendo el orde es decir de "01-2014" se pasa a "2014-01",
//                          esto es para realizar luego un ordenamiento de los datos por periodo
//                          2do. Para realizar el ordenamiento se construye una dupla periodo -
//                          media para luego finalmente separarlos en etiquetas y datos.
//                          Ejem: ["2014-01","2014-02"]
//          
//          t_med_per     = Variable que contiene la sumatoria de las medias de cada
//                          sección en un período         
//          
//          
//          $scope.datos02 = Arreglo de arreglo contentivo de los datos a graficar. En este
//                          caso de gráfica es de un solo objeto ya que no es comparado.
//                          Ejem: [[3.33,3.39]]
//          $scope.numrep = Contiene el número que identifica al reporte:
//                          0:    Histórico de Pregunta por Materia
//                          1:    Histórico Completo de Materia por Instrumento, etc.
//           
//          i             = indice para recorrido en arreglo de periodos
//          periodo       = datos de periodos activo
//          vejex01       = contiene el periodo actual tranformado en XXXX-XX
//          j             = indice para recorrido en arreglo de secciones en un periodo
//          t_sec_x_per   = contiene el número de secciones de un período, se usa para cálculo
//                          de la media de las medias
//          $scope.datos01= contiene el promedio de las medias
//          vdatos01      = contiene la dupla periodo promedio, ["2014-01",3.33]
//          tvdatos0      = se une periodo con promedio ["2014-01,3.33"] para luego ordenar
//          vejex011      = contiene el promedio de las medias una vez separado del
//                          periodo en formato numerico
//          $scope.Vp70   = variable global que permite la visualización de la gráfica
//---------------------------------------------------------------------------------------------
            if ($scope.numrep === 0) {
               GraR0.get({codigo: $scope.matsel ,id: $scope.presel}, function(data){
               $scope.nombre_reporte='Histórico de Pregunta por Materia'+' '+data.materia.codigo+' '+data.materia.nombre;
               $scope.n_materia =data.materia.codigo+' '+data.materia.nombre;
               $scope.series.push(data.pregunta.interrogante); 
//             inicialización de variables globales
               $scope.ejex01=[];
               $scope.gra_dat=[];
//             inicialización de variables locales  
               var vejex01=''; 
               var t_med_per = 0;
               var t_sec_x_per = 1; 
               var tvdatos1=[];
               var tvdatos0=[];
               var vdatos01=[];
               var vejex011=[];
//             Iteración en arreglo de períodos                
               for (var i = 0; i <= data.periodos.length-1; i++) {  
                  var periodo = data.periodos[i];
//             se invierte el formato de periodo de XX-XXXX a XXXX-XX lo q facilita el 
//             ordenamiento
                  vejex01= periodo.periodo.substr(3,4).concat(periodo.periodo.substr(0,2));
                  t_med_per = 0;
                  t_sec_x_per = periodo.secciones.length// contiene la cant de secciones
//             Iteración en arreglo de secciones por períodos   
                  for (var j  = 0; j <= periodo.secciones.length-1; j++) {       
                    var seccion = periodo.secciones[j];
                    t_med_per += seccion.datos.media_de_seccion; //sumatoria de las medias
                  };
                  vdatos01.push(vejex01,t_med_per/t_sec_x_per);// dupla periodo promedio
                  tvdatos0.push(vdatos01.join(','));       // se une periodo con promedio
                  vdatos01=[];                             // se inicializa 
                  tvdatos0= tvdatos0.sort();               // se ordena por periodo
                };
//             separar las etiquetas de los datos
                $scope.ejex01=[];                          // se inicializan
                $scope.gra_dat=[];                         // se inicializan
//             Iteración en arreglo de duplas periodo-media en formato string
//             el cual debe separarse en arreglo de etiquetas (string) $scope.ejex01
//             y en arreglo de datos (numérico)  vejex011 
               // $scope.ejex01.push('0');
               // vejex011.push(0);
                  for (var x  = 0; x <= tvdatos0.length-1; x++) {   
                    $scope.ejex01.push(tvdatos0[x].substr(0,4).concat('-',tvdatos0[x].substr(4,2)));
                    vejex011.push((tvdatos0[x].substr(7,4))*1);//se multiplica por 1 para convertir de string a número              
                  };
                  vejex011.push(0);
                  vejex011.push(5);
                  $scope.gra_dat.push(vejex011);//se construye el arreglo de arreglo para los datos
               });
             // console.log($scope.ejex01); 
             // console.log($scope.gra_dat);
             // console.log($scope.series);
               $scope.Vp70=false;
            }

//Construcción de la vista para reporte:   1-Histórico Completo de Materia por Instrumento
//-------------------------------------
//Se requiere garantizar la data ordenada por período, es por ello que se utilizan
//          métodos para la manipulación de strings como substr, concat, sort, join.
//Variables utilizadas: 
//--------------------
// $scope.matsel   = materia seleccionado
// $scope.inssel   = instrumento seleccionado 
// $scope.gra_dat  = Matriz definitiva que contiene los datos a graficar 
// pro_med_0       = Arreglo base, que contiene los promedio de medias inicial
// t_sec_x_per     = Variable que contiene el número de secciones de un 
//                   período, se usa para cálculo del promedio de las medias          
// t_med_per       = Variable que contiene la sumatoria de las medias de cada
//                   sección en un período
// ***                 
// $scope.n_materia= nombre de la materia
// $scope.n_instrumento = nombre de la instrumento
// $scope.n_bloque = nombre bloque
// ***
// n_pregunta_m    = nombre pregunta
// e_x_pregunta    = etiquetas por pregunta eje de las x
// datos_grafica_t = arreglo auxiliar para construir la matriz de datos a 
//                   graficar    
// e_actual_x_p    = contiene la etiqueta actual (periodo) en formato XXXX-XX
// dupla_t         = Arreglo auxiliar para la construcción de la dupla 
//                   periodo,promedio ["2014-01",3.33]         
// dupla_string_t  = Arreglo que convierte los datos de dupla_t en un string
//                   ["2014-01,3.33"] y por ultimo lo ordena.                   
// m               = Indice para recorrer arreglo de bloques de un Instrumento                                
// bloque          = Bloque posición m del instrumento 
// n               = indice para recorrer arreglo de preguntas de un bloque                                                                   
// pregunta        = Pregunta posición n de un Bloque
// o               = indice para recorrer arreglo de resultados de una pregunta
// j               = indice para recorrer arreglo de secciones de un resultado         
// seccion         = Sección actual de resultado         
// x               = indice para recorrer arreglo de string de duplas con el fin de                                  
//                   separar las etiquetas de los datos una vez ya ordenados                                             
// pro_med_1       = Arreglo de arreglo de promedios extraidos de la dupla a graficar                                                                                                                     
// etiquetas       = Arreglo de arreglo de etiquetas                                                                                                                                                                                                                                    

            if ($scope.numrep === 1) {
                GraR1.get({codigo: $scope.matsel ,instrumento_id: $scope.inssel}, function(data){
                    $scope.nombre_reporte='Histórico Completo de Materia '+data.materia.codigo+'-'+data.materia.nombre+' por Instrumento '+data.instrumento.nombre;
                    $scope.n_materia =data.materia.codigo+' '+data.materia.nombre;
                    $scope.n_instrumento=data.instrumento.nombre;
                    $scope.n_bloque    =""; 
                    $scope.gra_dat     =[];

                    var pro_med_0      =[];
                    var pro_med_1      =[]; 
                    var t_sec_x_per    = 1; 
                    var t_med_per      = 0; 
                    var n_pregunta_m   ="";
                    var e_x_pregunta   =[];
                    var datos_grafica_t=[];
                    var e_actual_x_p   ="";
                    var dupla_t        =[];
                    var dupla_string_t =[];
                    var etiquetas      =[];
//             Iteración en arreglo de instrumentos 
                    for (var m = 0; m <= data.instrumento.bloques.length-1; m++) {
                        var bloque = data.instrumento.bloques[m];
                        $scope.n_bloque="Bloque: "+bloque.nombre;
//             Iteración en arreglo de bloques                        
                        for (var n = 0; n <=bloque.preguntas.length-1; n++) {
                            var pregunta  = bloque.preguntas[n];
                            e_x_pregunta  =[];
                            dupla_string_t=[];
//             Iteración en arreglo de preguntas 
                            for (var o = 0; o <=pregunta.resultados.length-1;o++) {
                                var resultado   = pregunta.resultados[o];
                                var t_sec_x_per = resultado.secciones.length;
                                n_pregunta_m    = pregunta.interrogante;
//             obtiene la etiqueta que es el período
                                e_actual_x_p= resultado.periodo.substr(3,4).concat('-',resultado.periodo.substr(0,2));
                                t_med_per = 0;
//             Iteración en arreglo de secciones dentro de resultado 
                                for (var j = 0; j<=resultado.secciones.length-1;j++) {
                                    var seccion = resultado.secciones[j];
//             Se totaliza medias de secciones t_med_per                                    
                                    t_med_per += seccion.datos.media_de_seccion;
                                };
//             Se crea la dupla periodo/promedio en el arreglo dupla_t y 
//             se deja ordenado en dupla_string_t         
                                dupla_t.push(e_actual_x_p,t_med_per/t_sec_x_per);
                                dupla_string_t.push(dupla_t.join(','));
                                dupla_t=[];
                            };
//             Se ordena el arreglo dupla_string_t que contiene las duplas de una pregunta                           
                            dupla_string_t=dupla_string_t.sort();  
                            pro_med_0=[];
                            pro_med_1=[];
//             Solo se imprime lo que posea almenos un dato                                      
                            if (dupla_string_t.length == 0) {              
                            }else{
                                datos_grafica_t=[];
                                
//             Se procede a separar las duplas, dejando en los arreglos:
//             e_x_pregunta los periodos y en pro_med_0 los promedios de 
//             las medias, para ello debe rrecorrerse el arreglo dupla_string_t
                                // e_x_pregunta.push('0');//necesario para arranque en (0,0)
                                // pro_med_0.push(0);     //necesario para arranque en (0,0)
                                for (var x  = 0; x <= dupla_string_t.length-1; x++) {   
                                  e_x_pregunta.push(dupla_string_t[x].substr(0,7));
//             se multiplica por 1 para convertir de string a número                                                
                                  pro_med_0.push((dupla_string_t[x].substr(8,4))*1);
                                };
                                pro_med_0.push(0);//necesario para tope en (x,0)
                                pro_med_0.push(5);//necesario para tope en (x,5)
                                pro_med_1.push(pro_med_0);
                                etiquetas=[];
                                etiquetas.push(n_pregunta_m);
//             Se genera la matriz de datos requerido para generar gráficas tipo linea y barras
//             [ "pregunta" , ["2014-01","2014-02",...] , [[3.33,2,...]] ]
//             
                                datos_grafica_t.push(etiquetas,e_x_pregunta,pro_med_1);
                                $scope.gra_dat.push(datos_grafica_t);
                            };    
                        };
                    };
                });       
                $scope.Vp71=false;
            }

//---------------------------------------------------------------------------------------------
//Construcción de la vista para reporte:    2-Histórico Comparado de Materia
//-------------------------------------
//Se requiere garantizar la data ordenada por período, es por ello que se utilizan
//          métodos para la manipulación de strings como substr, concat, sort, join.
//Variables utilizadas: 
//--------------------
//          GraR2.get     = Indica el servicio del reporte 2 que a través del método get
//                          realiza la petición al servidor retornando un json el cual puede
//                          ser referenciado en data.
//                          url: rpdf:'http://localhost:3000/api/v1/reportes/historico_comparado/
//                          materias/:codigo/instrumentos/:instrumento_id.json
//                          ?ids[]=1&ids[]=2&ids[]=3'.json'
//          $scope.matsel = materia seleccionado
//          $scope.inssel = instrumento seleccionado
//          $scope.gra_dat =arreglo de arreglo, datos a graficar
//          $scope.gra_dat_t =arreglo de datos a graficar temporal
//          $scope.n_materia = nombre de la materia 
//          $scope.n_instrumento = nombre de instrumento
//          
//          $scope.n_pregunta_a = arreglo de preguntas = series 
//          $scope.ejex01 = Arreglo simple contentivo de Las etiquetas de la gráfica. Estas
//                          se construyen:
//                          1ro. Invirtiendo el orde es decir de "01-2014" se pasa a "2014-01",
//                          esto es para realizar luego un ordenamiento de los datos por periodo
//                          2do. Para realizar el ordenamiento se construye una dupla periodo -
//                          media para luego finalmente separarlos en etiquetas y datos.
//                          Ejem: ["2014-01","2014-02"]
//          
//          t_med_per     = Variable que contiene la sumatoria de las medias de cada
//                          sección en un período         
//          t_sec_x_per   = contiene el número de secciones de un período, se usa para cálculo       
//           
//          n             = indice para recorrido en arreglo de preguntas
//          pregunta      = datos de pregunta[n]
//          o             = indice para recorrido en arreglo de resultados
//          resultado     = datos de resultado[o]
//          j             = indice para recorrido en arreglo de secciones 
//          seccion       = datos de seccion[j]
//          
//          vejex01       = contiene el periodo actual tranformado en XXXX-XX



//                          
//          vdatos01      = contiene la dupla periodo promedio, ["2014-01",3.33]
//          tvdatos0      = se une periodo con promedio ["2014-01,3.33"] para luego ordenar
//          vejex011      = contiene el promedio de las medias una vez separado del
//                          periodo en formato numerico
//          $scope.Vp70   = variable global que permite la visualización de la gráfica
//---------------------------------------------------------------------------------------------
            if ($scope.numrep === 2) {
              GraR2.get({codigo: $scope.matsel ,instrumento_id: $scope.inssel,'ids[]': [$scope.idssel1,$scope.idssel2,$scope.idssel3]}, function(data){
                $scope.Vp61=false;$scope.Vp62=false;$scope.Vp63=false;
                $scope.gra_dat= [];  
                $scope.gra_dat_t=[]; 
                $scope.ejex11 =[];
                $scope.n_pregunta_a =[];       
                $scope.nombre_reporte="Histórico Comparado de Materia "+data.materia.codigo+'-'+data.materia.nombre+' por Instrumento: '+data.instrumento.nombre;
                $scope.n_materia    = "Materia: "+data.materia.codigo+' '+data.materia.nombre;   //nombre de materia
                $scope.n_instrumento= "Instrumento: "+data.instrumento.nombre;   //nombre de instrumento                    
                var t_sec_x_per = 1;
                var t_med_per = 0;
                // var nombre_x_m=[];
                var datos_grafica_m=[];
                for (var n = 0; n <= data.instrumento.preguntas.length - 1; n++) {
                     var pregunta = data.instrumento.preguntas[n];
                     var periodo =[];
                     $scope.gra_dat_t=[];
                     $scope.ejex11 =[];
                     // $scope.gra_dat_t.push(0);
                     // $scope.ejex11.push('0');
                     // nombre_x_m=[];
//       se llena el arreglo de preguntas                            
                     $scope.n_pregunta_a.push(pregunta.interrogante);                        
                     for (var o = 0; o <= pregunta.resultados.length - 1; o++) {
                          var resultado    = pregunta.resultados[o];
                          var t_sec_x_per  = resultado.secciones.length;

//       se llena el arreglo de etiquetas = periodos                            
                          // nombre_x_m.push(resultado.periodo);
                          $scope.ejex11.push(resultado.periodo);
//       se inicializa variable totalizadora                            
                          t_med_per = 0;
                          for (var j = 0; j <= resultado.secciones.length - 1; j++) {
                               var seccion = resultado.secciones[j];
                               t_med_per += seccion.datos.media_de_seccion;
                          };
//       se llena el arreglo de datos = promedio de las medias de secciones                            
                          $scope.gra_dat_t.push(t_med_per/t_sec_x_per);
                       };             
                       if ($scope.ejex11.length == 0) {              
                       }else{
                         $scope.gra_dat_t.push(0);
                         $scope.gra_dat_t.push(5);
                         $scope.gra_dat.push($scope.gra_dat_t);
                       };    
                 };
               });
              $scope.Vp72=false;
            }

//Construcción de la vista para reporte:   3-Histórico Completo de Materia por Período
//-------------------------------------
//Se requiere garantizar la data ordenada por período, es por ello que se utilizan
//          métodos para la manipulación de strings como substr, concat, sort, join.
//Variables utilizadas: 
//--------------------
// GraR3.get            = Indica el servicio del reporte 3 que a través del método get
//                        realiza la petición al servidor retornando un json el cual puede
//                        ser referenciado en data.
//                        rpdf:'http://localhost:3000/api/v1/reportes/periodo_completo
//                        /materias/:codigo/periodos/:periodo           
// $scope.matsel        = materia seleccionado
// $scope.persel        = periodo seleccionado 
// $scope.gra_dat       = Matriz definitiva que contiene los datos a graficar  
// $scope.n_periodo     = Variable que contiene el periodo
// $scope.nombre_reporte= texto del reporte a desplegar en la vista
// $scope.n_materia     = Variable con el nombre de la Materia
// $scope.n_instrumento = Variable con el nombre del Instrumento
// $scope.n_bloque      = Variable con nombre del bloque
// $scope.n_pregunta    = Variable con nombre de pregunta
// med_sec              = Arreglo auxiliar contiene las medias por seccion 
// n_seccion            = Arreglo auxiliar contiene las secciones
// datos_grafica_m      = Arreglo auxiliar para construcción de datos a graficar
// m                    = Indice para recorrer arreglo de bloques de un Instrumento                                
// bloque               = Datos activos de un Bloque 
// n                    = Indice para recorrer arreglo de preguntas de un bloques
// pregunta             = Datos activos de una Pregunta
// o                    = Indice para recorrer arreglo de resultados de una preguntas
// resultado            = Datos activos de una Pregunta
// j                    = Indice para recorrer arreglo de secciones en resultados
// seccion              = Datos activos de una Sección
// 
// 
            if ($scope.numrep === 3) {
                GraR3.get({codigo: $scope.matsel ,periodo: $scope.persel}, function(data){
                    $scope.nombre_reporte='Período Completo de Materia '+data.materia.codigo+'-'+data.materia.nombre+" por Instrumento: "+data.instrumento.nombre;
                    $scope.gra_dat       = [];  
                    $scope.n_periodo     =[];        
                    $scope.n_materia     ="Materia: "+data.materia.codigo+' '+data.materia.nombre;
                    $scope.n_instrumento ="Instrumento: "+data.instrumento.nombre;
                    $scope.n_bloque      ="";
                    $scope.n_pregunta    ="";
                    var med_sec          =[];
                    var n_seccion        =[];
                    var datos_grafica_m  =[];
                    var n_reporte        ="";
                    for (var m = 0; m <= data.instrumento.bloques.length - 1; m++) {
                        var bloque = data.instrumento.bloques[m];
                        $scope.n_bloque="Bloque: "+bloque.nombre;
                        for (var n = 0; n <= bloque.preguntas.length - 1; n++) {
                            var pregunta = bloque.preguntas[n];
                            var periodo =[];
                            med_sec=[];
                            $scope.n_periodo =[];
                            n_seccion=[];
                            for (var o = 0; o <= pregunta.resultados.length - 1; o++) {
                                var resultado = pregunta.resultados[o];
                                $scope.n_pregunta="Pregunta: "+pregunta.interrogante;
                                $scope.n_periodo[o]=resultado.periodo;
                                for (var j = 0; j <= resultado.secciones.length - 1; j++) {
                                    var seccion = resultado.secciones[j];
                                    n_seccion.push('Secc: '+seccion.seccion);
                                    med_sec.push(seccion.datos.media_de_seccion);
                                };
                                // n_reporte=$scope.n_materia+"-"+$scope.n_instrumento+"-"+$scope.n_bloque+"-"+$scope.n_pregunta;
                                n_reporte=$scope.n_pregunta;
                            };             
                            if (n_seccion.length == 0) {              
                            }else{
                                datos_grafica_m=[];
                                datos_grafica_m.push(n_reporte,n_seccion,med_sec,$scope.n_periodo);
                                $scope.gra_dat.push(datos_grafica_m);
                            };    
                        };
                    };
                    // console.log($scope.gra_dat);
                });

                $scope.Vp73=false;
            }
//             
            if ($scope.numrep === 4) {
// rpdf:'http://localhost:3000/api/v1/reportes/periodo_comparado/materias/:codigo/periodos/:periodo.pdf',
               GraR4.get({codigo: $scope.matsel ,periodo: $scope.persel, 'ids[]': [$scope.idssel1,$scope.idssel2,$scope.idssel3]}, function(data){
$scope.Vp61=false;$scope.Vp62=false;$scope.Vp63=false;
                                // $scope.valores = data;
                                // console.log($scope.valores);
                // $scope.Vp61=false;$scope.Vp62=false;$scope.Vp63=false;
//                 $scope.gra_dat= [];  
//                 $scope.gra_dat_t=[]; 
//                 $scope.ejex11 =[];
//                 $scope.n_pregunta_a =[];       
//                 $scope.nombre_reporte="Histórico Comparado de Materia";
//                 $scope.n_materia    = "Materia: "+data.materia.codigo+' '+data.materia.nombre;   //nombre de materia
//                 $scope.n_instrumento= "Instrumento: "+data.instrumento.nombre;   //nombre de instrumento                    
//                 var t_sec_x_per = 1;
//                 var t_med_per = 0;
//                 var nombre_x_m=[];
//                 var datos_grafica_m=[];
//                 for (var n = 0; n <= data.instrumento.preguntas.length - 1; n++) {
//                      var pregunta = data.instrumento.preguntas[n];
//                      var periodo =[];
//                      $scope.gra_dat_t=[];
//                      $scope.ejex11 =[];
//                      nombre_x_m=[];
// //       se llena el arreglo de preguntas                            
//                      $scope.n_pregunta_a.push(pregunta.interrogante);                        
//                      for (var o = 0; o <= pregunta.resultados.length - 1; o++) {
//                           var resultado    = pregunta.resultados[o];
//                           var t_sec_x_per  = resultado.secciones.length;

// //       se llena el arreglo de etiquetas = periodos                            
//                           nombre_x_m.push(resultado.periodo);
//                           $scope.ejex11[o]=resultado.periodo;
// //       se inicializa variable totalizadora                            
//                           t_med_per = 0;
//                           for (var j = 0; j <= resultado.secciones.length - 1; j++) {
//                                var seccion = resultado.secciones[j];
//                                t_med_per += seccion.datos.media_de_seccion;
//                           };
// //       se llena el arreglo de datos = promedio de las medias de secciones                            
//                           $scope.gra_dat_t.push(t_med_per/t_sec_x_per);
//                        };             
//                        if (nombre_x_m.length == 0) {              
//                        }else{
//                          $scope.gra_dat.push($scope.gra_dat_t);
//                        };    
//                  };
             });
                $scope.Vp74=false;
            }


//---------------------------------------------------------------------------------------------
//Construcción de la vista para reporte:    5-Histórico de Pregunta por Docente
//-------------------------------------
//Se requiere garantizar la data ordenada por período, es por ello que se utilizan
//          métodos para la manipulación de strings como substr, concat, sort, join.
//Variables utilizadas: 
//--------------------
//          GraR5.get     = Indica el servicio del reporte 0 que a través del método get
//                          realiza la petición al servidor retornando un json el cual puede
//                          ser referenciado en data.
//                          url: rpdf:'http://localhost:3000/api/v1/reportes/historico_pregunta/
//                          docentes/:cedula_docente/preguntas/:pregunta_id..json'
//          $scope.docsel = docente seleccionado
//          $scope.n_docente= Cédula-Nombre del Docente
//          $scope.presel = pregunta seleccionada
//          $scope.gra_dat = Arreglo de arreglo contentivo de los datos a graficar. En este
//                          caso de gráfica es de un solo objeto ya que no es comparado.
//                          Ejem: [[3.33,3.39]]
//                          
//                          
//           
//          $scope.n_materia = nombre de la materia 
//          $scope.series = contiene la pregunta 
//          $scope.ejex01 = Arreglo simple contentivo de Las etiquetas de la gráfica. Estas
//                          se construyen:
//                          1ro. Invirtiendo el orde es decir de "01-2014" se pasa a "2014-01",
//                          esto es para realizar luego un ordenamiento de los datos por periodo
//                          2do. Para realizar el ordenamiento se construye una dupla periodo -
//                          media para luego finalmente separarlos en etiquetas y datos.
//                          Ejem: ["2014-01","2014-02"]
//          
//          t_med_per     = Variable que contiene la sumatoria de las medias de cada
//                          sección en un período         
//          
//           
//          i             = indice para recorrido en arreglo de periodos
//          periodo       = datos de periodos activo
//          vejex01       = contiene el periodo actual tranformado en XXXX-XX

//          j             = indice para recorrido en arreglo de secciones en un periodo
//          t_sec_x_per   = contiene el número de secciones de un período, se usa para cálculo
//                          de la media de las medias
//          vdatos01      = contiene la dupla periodo promedio, ["2014-01",3.33]
//          tvdatos0      = se une periodo con promedio ["2014-01,3.33"] para luego ordenar
//          vejex011      = contiene el promedio de las medias una vez separado del
//                          periodo en formato numerico
//          $scope.Vp70   = variable global que permite la visualización de la gráfica
//---------------------------------------------------------------------------------------------
            if ($scope.numrep === 5) {
               GraR5.get({cedula_docente: $scope.docsel ,pregunta_id: $scope.presel}, function(data){
               $scope.nombre_reporte='Histórico de Pregunta por Docente '+data.docente.cedula+'-'+data.docente.nombre_completo;
               $scope.n_docente=data.docente.cedula+'-'+data.docente.nombre_completo;
               $scope.series.push(data.pregunta.interrogante); 
//             inicialización de variables globales
               $scope.ejex01=[];
               $scope.gra_dat=[];
//             inicialización de variables locales  
               var vejex01=''; 
               var t_med_per = 0;
               var t_med_per = 0;
               var t_sec_x_per = 1; 
               var tvdatos1=[];
               var tvdatos0=[];
               var vdatos01=[];
               var vejex011=[];
//             Iteración en arreglo de períodos                
               for (var i = 0; i <= data.periodos.length-1; i++) { 
                  var periodo = data.periodos[i];
//                se invierte el formato de periodo de XX-XXXX a XXXX-XX lo q facilita el 
//                ordenamiento
                  vejex01= periodo.periodo.substr(3,4).concat(periodo.periodo.substr(0,2));
//             Iteración en arreglo de materias 
                  for (var j = 0; j <= periodo.materias.length-1; j++) {  
                    var materia = periodo.materias[j];
                    t_med_per = 0;
                    t_sec_x_per = periodo.materias.length;   
                    for (var k  = 0; k <= materia.secciones.length-1; k++) {  // contiene la cant de secciones
//             Iteración en arreglo de secciones por períodos
                      var seccion = materia.secciones[k];  
                      t_med_per += seccion.datos.media_de_seccion; //sumatoria de las medias
                    };
                  };
                  vdatos01.push(vejex01,t_med_per/t_sec_x_per);// dupla periodo promedio
                  tvdatos0.push(vdatos01.join(','));       // se une periodo con promedio
                  vdatos01=[];                             // se inicializa 
                  tvdatos0= tvdatos0.sort();               // se ordena por periodo
                };
//             separar las etiquetas de los datos
                $scope.ejex01=[];                          // se inicializan
                $scope.gra_dat=[];                         // se inicializan
//             Iteración en arreglo de duplas periodo-media en formato string
//             el cual debe separarse en arreglo de etiquetas (string) $scope.ejex01
//             y en arreglo de datos (numérico)  vejex011 
               // $scope.ejex01.push('0');
               // vejex011.push(0);
                  for (var x  = 0; x <= tvdatos0.length-1; x++) {   
                    $scope.ejex01.push(tvdatos0[x].substr(0,4).concat('-',tvdatos0[x].substr(4,2)));
                    vejex011.push((tvdatos0[x].substr(7,4))*1);//se multiplica por 1 para convertir de string a número              
                  };
//             se construye el arreglo de arreglo para los datos
                  vejex011.push(0);
                  vejex011.push(5);
                  $scope.gra_dat.push(vejex011);
               });
               $scope.Vp75=false;
            }



//Construcción de la vista para reporte:   6-Histórico Completo de Docente
//-------------------------------------
//Se requiere garantizar la data ordenada por período, es por ello que se utilizan
//          métodos para la manipulación de strings como substr, concat, sort, join.
//Variables utilizadas: 
//--------------------
// $scope.matsel   = materia seleccionado
// $scope.inssel   = instrumento seleccionado 
// $scope.gra_dat  = Matriz definitiva que contiene los datos a graficar 
// pro_med_0       = Arreglo base, que contiene los promedio de medias inicial
// t_sec_x_per     = Variable que contiene el número de secciones de un 
//                   período, se usa para cálculo del promedio de las medias          
// t_med_per       = Variable que contiene la sumatoria de las medias de cada
//                   sección en un período
// ***                 
// $scope.n_materia= nombre de la materia
// $scope.n_instrumento = nombre de la instrumento
// $scope.n_bloque = nombre bloque
// ***
// n_pregunta_m    = nombre pregunta
// e_x_pregunta    = etiquetas por pregunta eje de las x
// datos_grafica_t = arreglo auxiliar para construir la matriz de datos a 
//                   graficar    
// e_actual_x_p    = contiene la etiqueta actual (periodo) en formato XXXX-XX
// dupla_t         = Arreglo auxiliar para la construcción de la dupla 
//                   periodo,promedio ["2014-01",3.33]         
// dupla_string_t  = Arreglo que convierte los datos de dupla_t en un string
//                   ["2014-01,3.33"] y por ultimo lo ordena.                   
// m               = Indice para recorrer arreglo de bloques de un Instrumento                                
// bloque          = Bloque posición m del instrumento 
// n               = indice para recorrer arreglo de preguntas de un bloque                                                                   
// pregunta        = Pregunta posición n de un Bloque
// o               = indice para recorrer arreglo de resultados de una pregunta
// j               = indice para recorrer arreglo de secciones de un resultado         
// seccion         = Sección actual de resultado         
// x               = indice para recorrer arreglo de string de duplas con el fin de                                  
//                   separar las etiquetas de los datos una vez ya ordenados                                             
// pro_med_1       = Arreglo de arreglo de promedios extraidos de la dupla a graficar                                                                                                                     
// etiquetas       = Arreglo de arreglo de etiquetas                                                                                                                                                                                                                                    

            if ($scope.numrep === 6) {
                GraR6.get({cedula_docente: $scope.docsel ,instrumento_id: $scope.inssel}, function(data){
                    $scope.nombre_reporte ='Histórico Completo de Docente '+data.docente.cedula+'-'+data.docente.nombre_completo;
                    $scope.n_docente=data.docente.cedula+'-'+data.docente.nombre_completo;
                    // $scope.n_instrumento = data.instrumento.nombre;
                    $scope.n_bloque    =""; 
                    $scope.gra_dat     =[];
                    var pro_med_0      =[];
                    var pro_med_1      =[]; 
                    var t_sec_x_per    = 1; 
                    var t_med_per      = 0; 
                    var n_pregunta_m   ="";
                    var e_x_pregunta   =[];
                    var datos_grafica_t=[];
                    var e_actual_x_p   ="";
                    var dupla_t        =[];
                    var dupla_string_t =[];
                    var etiquetas      =[];
//             Iteración en arreglo de instrumentos 
                    for (var m = 0; m <= data.instrumento.bloques.length-1; m++) {
                        var bloque = data.instrumento.bloques[m];
                        $scope.n_bloque="Bloque: "+bloque.nombre;
//             Iteración en arreglo de bloques                        
                        for (var n = 0; n <=bloque.preguntas.length-1; n++) {
                            var pregunta  = bloque.preguntas[n];
                            e_x_pregunta  =[];
                            dupla_string_t=[];
                            dupla_t=[];
//             Iteración en arreglo de preguntas 
                            for (var o = 0; o <=pregunta.resultados.length-1;o++) {
                                var resultado   = pregunta.resultados[o];
//             obtiene la etiqueta que es el período e interrogante
                             e_actual_x_p= resultado.periodo.substr(3,4).concat('-',resultado.periodo.substr(0,2));
                             t_med_per = 0;
                             for (var q = 0; q <= resultado.materias.length - 1; q++) {
                               var mat = resultado.materias[q];
                               var t_sec_x_per = mat.secciones.length;
                               n_pregunta_m= pregunta.interrogante;  
                               // nombre_x_m.push(mat.periodo);
                               t_med_per = 0;
//             Iteración en arreglo de secciones dentro de resultado 
                                for (var j = 0; j<=mat.secciones.length-1;j++) {
                                    var seccion = mat.secciones[j];
//             Se totaliza medias de secciones t_med_per                                    
                                    t_med_per += seccion.datos.media_de_seccion;
                                };
                             };                               
//             Se crea la dupla periodo/promedio en el arreglo dupla_t y 
//             se deja ordenado en dupla_string_t
//             dupla periodo/promedio                          
                                dupla_t.push(e_actual_x_p,t_med_per/t_sec_x_per);
                                dupla_string_t.push(dupla_t.join(','));       // se unen
                                dupla_t=[];
                            };
//             Se ordena el arreglo dupla_string_t que contiene las duplas de una pregunta                           
                            dupla_string_t= dupla_string_t.sort();  
//             Solo se imprime lo que posea almenos un dato 
                            if (dupla_string_t.length == 0) {              
                            }else{
                                datos_grafica_t=[];
                                pro_med_1=[];
//             Se procede a separar las duplas, dejando en los arreglos:
//             e_x_pregunta los periodos y en pro_med_0 los promedios de 
//             las medias, para ello debe rrecorrerse el arreglo dupla_string_t
                                e_x_pregunta  =[];
                                pro_med_0  =[];
                                // e_x_pregunta.push('0');
                                // pro_med_0.push(0);
                                for (var x  = 0; x <= dupla_string_t.length-1; x++) {   
                                  e_x_pregunta.push(dupla_string_t[x].substr(0,7));
                                  pro_med_0.push((dupla_string_t[x].substr(8,4))*1);//se multiplica por 1 para convertir de string a número              
                                };
// console.log("e_x_pregunta:",e_x_pregunta); 
// console.log("pro_med_0:",pro_med_0); 
                                pro_med_0.push(0);
                                pro_med_0.push(5);
                                pro_med_1.push(pro_med_0);
                                etiquetas=[];
                                etiquetas.push(n_pregunta_m);
//             Se genera la matriz de datos requerido para generar gráficas tipo linea y barras
//             [ "pregunta" , ["2014-01","2014-02",...] , [[3.33,2,...]] ]
                                datos_grafica_t.push(etiquetas,e_x_pregunta,pro_med_1);
                                $scope.gra_dat.push(datos_grafica_t);
                            };
                        };
                    };
                });       
                $scope.Vp76=false;
            }


            if ($scope.numrep === 7) {
                         
                GraR7.get({cedula_docente: $scope.docsel ,instrumento_id: $scope.inssel,'ids[]': $scope.psel}, function(data){
                // $scope.repourl=API+'/reportes/historico_comparado/docentes/'+$scope.docsel+'/instrumentos/'+$scope.inssel+'.json?ids[]=1&ids[]=2&ids[]=3';
                // $scope.valores = data;
                }) ;
                    
            $scope.Vp77=false;
            }


//Construcción de la vista para reporte:   8-Período Completo de Docente
//-------------------------------------
//Se requiere garantizar la data ordenada por período, es por ello que se utilizan
//          métodos para la manipulación de strings como substr, concat, sort, join.
//Variables utilizadas: 
//--------------------
// $scope.docsel   = docente seleccionado
// $scope.persel   = período seleccionado 
// $scope.gra_dat  = Matriz definitiva que contiene los datos a graficar 
// $scope.n_instrumento = nombre de la instrumento
// $scope.n_bloque = nombre bloque
// ***
// n_pregunta_m    = nombre pregunta
// e_x_pregunta    = etiquetas por pregunta eje de las x
// datos_x_opc     = arreglo de totales por opcion de una pregunta
// valor_media_m   = media de seccion
// datos_grafica_t = arreglo auxiliar para construir la matriz de datos a 
//                   graficar 
// datos_temp      = arreglo temporal de totalización              
// m               = Indice para recorrer arreglo de bloques de un Instrumento                                
// bloque          = Bloque posición m del instrumento 
// n               = indice para recorrer arreglo de preguntas de un bloque                                                                   
// pregunta        = Pregunta posición n de un Bloque
// o               = indice para recorrer arreglo de resultados de una pregunta
// q               = indice para recorrer arreglo de materias de resultado
// j               = indice para recorrer arreglo de secciones de materias        
// a               = indice para recorrer arreglo de totalización                                     
                                                                                                                                                                                                                                   

if ($scope.numrep === 8) {
 GraR8.get({cedula_docente: $scope.docsel ,periodo: $scope.persel}, function(data){
  $scope.gra_dat= [];  
  $scope.nombre_reporte   ="Período Completo de Docente "+data.docente.cedula+' '+data.docente.nombre_completo;
  $scope.nombre_rep       ="";
  $scope.n_instrumento    ="Instrumento: "+data.instrumento.nombre;
  $scope.n_bloque         ="";
  var nombre_docente_m    ="Docente: "+data.docente.cedula+' '+data.docente.nombre_completo;
  var nombre_periodo_m    ="Período: "+data.periodo;
  
  var n_pregunta_m        ="";
  var e_x_pregunta        =[]; 
  var datos_x_opc         =[];  
  var valor_media_m       =0;
  var datos_grafica_t     =[];
  var datos_temp          =[];
  for (var m = 0; m <= data.instrumento.bloques.length - 1; m++) {
   var bloque = data.instrumento.bloques[m];
   $scope.n_bloque="Bloque: "+bloque.nombre;
   for (var n = 0; n <= bloque.preguntas.length - 1; n++) {
    var pregunta = bloque.preguntas[n];
    var periodo =[];
    datos_x_opc=[];
    n_pregunta_m="Pregunta: "+pregunta.interrogante;
    for (var o = 0; o <= pregunta.resultados.length - 1; o++) {
     var resultado = pregunta.resultados[o];
     for (var q = 0; q <= resultado.materias.length - 1; q++) {
      var materia = resultado.materias[q];
      for (var j = 0; j <= materia.secciones.length - 1; j++) {
       var seccion = materia.secciones[j];
       e_x_pregunta = [];
       datos_x_opc=[];
       valor_media_m = seccion.datos.media_de_seccion;
       datos_temp=seccion.totalizacion;
       for (var a = 0; a <= datos_temp.length - 1; a++) {  
        datos_x_opc.push(datos_temp[a].total);
        e_x_pregunta.push("Opcion:".concat(a+1));
       };
      };
     };
    };  
    // $scope.nombre_rep=$scope.n_bloque+"-"+n_pregunta_m+"-Media: "+valor_media_m;
    $scope.nombre_rep=n_pregunta_m+" Media: "+valor_media_m;
    $scope.nombre_reporte="Período Completo de Docente "+nombre_docente_m+" "+nombre_periodo_m+" "+$scope.n_instrumento;
    if (datos_x_opc.length == 0) {  
    }else{
     datos_grafica_t=[];
     datos_grafica_t.push($scope.nombre_rep,e_x_pregunta,datos_x_opc);
     $scope.gra_dat.push(datos_grafica_t);
    };    
   };
  };
 });
$scope.Vp78=false;
}
if ($scope.numrep === 9) {
 GraR9.get({cedula_docente: $scope.docsel ,periodo: $scope.persel,'ids[]': $scope.psel}, function(data){
 });
                    // $scope.repourl=API+'/reportes/periodo_comparado/docentes/'+$scope.docsel+'/periodos/'+$scope.persel+'.json?ids[]=1&ids[]=2&ids[]=3';
                    $scope.Vp79=false;
                   };
                   if ($scope.docsel=== 0 && $scope.persel===0 && $scope.inssel===0 && $scope.presel===0 && $scope.matsel===0){
                    $scope.iniciar();
            // $scope.valores={};        
            // $scope.docsel=0;$scope.persel=0;$scope.inssel=0;$scope.carsel=1;
            // $scope.presel= 0;$scope.matsel= 0;
           };
        }; 

            $scope.enviar = function() {
                  $scope.Vp6=false;
            };        
            $scope.iniciar = function() {
              $scope.Visible1     = false;//false habilita la vista de la Tabla de Rep
              $scope.Visible2     = true; //false habilita la sección de datos requeridos
              $scope.Vp1          = true; //false habilita menú de materias
              $scope.Vp2          = true; //false habilita menú de preguntas
              $scope.Vp3          = true; //false habilita menú de instrumentos
              $scope.Vp4          = true; //false habilita menú de períodos académicos
              $scope.Vp5          = true; //false habilita menú de docentes
              $scope.Vp6          = true; //false habilita menú de instrumentos
              $scope.Vp61         = true; //false habilita menú de 1ra pregunta comparar
              $scope.Vp62         = true; //false habilita menú de 2da pregunta comparar
              $scope.Vp63         = true; //false habilita menú de 3ra pregunta comparar
              $scope.Vp7          = false;//false habilita sección de vista de gráficas 
              $scope.Vp70         = true; //false habilita gráficas 0-Histórico de Pregunta por Materia
              $scope.Vp71         = true; //false habilita gráficas 1-Histórico Completo de Materia por Instrumento
              $scope.Vp72         = true; //false habilita gráficas 2-Histórico Comparado de Materia
              $scope.Vp73         = true; //false habilita gráficas 3-Histórico Completo de Materia por Período
              $scope.Vp74         = true; //false habilita gráficas 4-Comparado de Materia por Período
              $scope.Vp75         = true; //false habilita gráficas 5-Histórico de Pregunta por Docente
              $scope.Vp76         = true; //false habilita gráficas 6-Histórico Completo de Docente
              $scope.Vp77         = true; //false habilita gráficas 7-Histórico Comparado de Docente
              $scope.Vp78         = true; //false habilita gráficas 8-Período Completo de Docente
              $scope.Vp79         = true; //false habilita gráficas 9-Período Comparado de Docente
              $scope.nombre_reporte='Seleccione Reporte';


            };
    }]);