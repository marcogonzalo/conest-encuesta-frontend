'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('InstrumentosEditCtrl', ['$scope', '$stateParams', 'Instrumento', function ($scope, $stateParams, Instrumento) {
    var nuevoInstrumento = true; // Se asume, por defecto, que es un nuevo instrumento

    $scope.instrumento = {};

    // Estructura de un instrumento nuevo
    var instrumento = {
        "id": null,
        "nombre": null,
        "descripcion": null,
        "bloques": Array()
    };

    // Verificar si se existe un id como parametro de la llamada
    if($stateParams.id == null) {
        // Si id es null, el instrumento es nuevo
        nuevoInstrumento = true;
        $scope.instrumento = instrumento;
    }
    else {
        // Si existe un id, se solicita el instrumento
        nuevoInstrumento = false;
        $scope.instrumento = Instrumento.get({id: $stateParams.id});

        // Falta validar si se obtuvo el objeto
    }

    $scope.agregarBloque = function(idx_bloque_anterior) {
        // Estructura de un bloque nuevo
        var bloque = {
            "id": null,
            "nombre": null,
            "descripcion": null,
            "tipo": null,
            "preguntas": Array()
        };

        if(idx_bloque_anterior === null) {
            console.log($scope);
            $scope.instrumento.bloques.unshift(bloque);
        }
        else {
            $scope.instrumento.bloques.splice(idx_bloque_anterior+1,0,bloque);
        }
    };

    $scope.agregarPregunta = function(bloque, idx_pregunta_anterior) {
        // Estructura de una pregunta nueva
        var pregunta = {
            "id": null,
            "interrogante": null,
            "descripcion": null,
            "tipo_pregunta": {
                "public_send": "valor_html",
                "nombre": "nombre",
                "valor": "valor",
                "valor_html": "valor_html"
            },
            "opciones": Array()
        };

        var indices = getIdxBloque(bloque);

        if(idx_pregunta_anterior === null) {
            $scope.instrumento.bloques[indices.bloque_idx].preguntas.unshift(pregunta);
        }
        else {
            $scope.instrumento.bloques[indices.bloque_idx].preguntas.splice(idx_pregunta_anterior+1,0,bloque);
        }
    };

    $scope.agregarOpcion = function(pregunta, idx_opcion_anterior) {
        // Estructura de una opción nueva
        var opcion = {
            "id": null,
            "etiqueta": null,
            "valor": null
        };

        var indices = getIdxPregunta(pregunta);

        if(idx_opcion_anterior === null) {
            $scope.instrumento.bloques[indices.bloque_idx].preguntas[indices.pregunta_idx].opciones.unshift(opcion);
        }
        else {
            $scope.instrumento.bloques[indices.bloque_idx].preguntas[indices.pregunta_idx].opciones.splice(idx_opcion_anterior+1,0,pregunta);
        }
    };

    var getIdxBloque = function(bloque) {
        var indices = {};
        for(var bi = 0, nb = $scope.instrumento.bloques.length; bi < nb; bi++) {
            if($scope.instrumento.bloques[bi].id == bloque.id) {
                indices = { "bloque_idx":bi };
                console.log(indices);
                return indices;
            }
        }
    };

    var getIdxPregunta = function(pregunta) {
        var indices = {};
        for(var bi = 0, nb = $scope.instrumento.bloques.length; bi < nb; bi++) {
            var pi = 0; // index de la pregunta
            var np = $scope.instrumento.bloques[bi].preguntas.length;
            for(pi = 0; pi < np; pi++) {        
                if($scope.instrumento.bloques[bi].preguntas[pi].id == pregunta.id) {
                    indices = { "bloque_idx":bi, "pregunta_idx": pi };
                    console.log(indices);
                    return indices;
                }
            }     
        }
    };

    var getIdxOpcion = function(opcion) {
        var indices = {};
        for(var bi = 0, nb = $scope.instrumento.bloques.length; bi < nb; bi++) {
            for(var pi = 0, np = $scope.instrumento.bloques[bi].preguntas.length; pi < np; pi++) {
                var oi = 0; // index de la pregunta
                var no = $scope.instrumento.bloques[bi].preguntas[pi].opciones.length;
                for(oi = 0; oi < no; oi++) {
                    if($scope.instrumento.bloques[bi].preguntas[pi].opciones[oi].id == opcion.id) {
                        indices = { "bloque_idx":bi, "pregunta_idx": pi, "opcion_idx": oi };
                        console.log(indices);
                        return indices;
                    }
                }
            }
        }
    };

    $scope.quitarBloque = function(bloque) {
        var indices = getIdxBloque(bloque);
        $scope.instrumento.bloques.splice(indices.bloque_idx,1);
    };

    $scope.quitarPregunta = function(pregunta) {
        var indices = getIdxPregunta(pregunta);
        $scope.instrumento.bloques[indices.bloque_idx].preguntas.splice(indices.pregunta_idx,1);        
    };

    $scope.quitarOpcion = function(opcion) {
        var indices = getIdxOpcion(opcion);
        $scope.instrumento.bloques[indices.bloque_idx].preguntas[indices.pregunta_idx].opciones.splice(indices.opcion_idx,1);
    };

    $scope.guardar = function() {
        if(nuevoInstrumento) {
            alert("nuevo");
            Instrumento.create($scope.instrumento, function(data) {
                console.log(data);
                console.log("Instrumento creado");
            });
        }
        else {
            alert("existe");
            Instrumento.update($scope.instrumento, function(data) {
                console.log(data);
                console.log("Instrumento actualizado");
            });
        }
    };
  }]);
