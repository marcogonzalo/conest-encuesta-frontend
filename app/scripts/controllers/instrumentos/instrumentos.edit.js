'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('InstrumentosEditCtrl', ['$scope', '$state', '$stateParams', 'Instrumento', 'Notification', function ($scope, $state, $stateParams, Instrumento, Notification) {
    var nuevoInstrumento = true; // Se asume, por defecto, que es un nuevo instrumento
    $scope.texto_boton = "Crear";
    $scope.instrumento = {};

    // Estructura de un instrumento nuevo
    var instrumento = {
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
        $scope.instrumento = Instrumento.get({id: $stateParams.id}, 
            function(data) { return data; }, 
            function(error) {
                Notification.error({ title: 'No se pudo obtener el instrumento', message: 'Cualquier modificación generada será registrada como un instrumento nuevo' });
                return {};
            });
        $scope.texto_boton = "Actualizar";
    }

    $scope.agregarBloque = function(idx_bloque_anterior) {
        // Estructura de un bloque nuevo
        var bloque = {
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

        $scope.agregarPregunta(bloque, null);
    };

    $scope.agregarPregunta = function(bloque, idx_pregunta_anterior) {
        // Estructura de una pregunta nueva
        var pregunta = {
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
            $scope.instrumento.bloques[indices.bloque_idx].preguntas.splice(idx_pregunta_anterior+1,0,pregunta);
        }

        $scope.agregarOpcion(pregunta,null);
        $scope.agregarOpcion(pregunta,null);
    };

    $scope.agregarOpcion = function(pregunta, idx_opcion_anterior) {
        // Estructura de una opción nueva
        var opcion = {
            "etiqueta": null,
            "valor": null
        };

        var indices = getIdxPregunta(pregunta);

        if(idx_opcion_anterior === null) {
            $scope.instrumento.bloques[indices.bloque_idx].preguntas[indices.pregunta_idx].opciones.push(opcion);
        }
        else {
            $scope.instrumento.bloques[indices.bloque_idx].preguntas[indices.pregunta_idx].opciones.splice(idx_opcion_anterior+1,0,opcion);
        }
    };

    var getIdxBloque = function(bloque) {
        var indices = {};
        console.log(bloque);
        for(var bi = 0, nb = $scope.instrumento.bloques.length; bi < nb; bi++) {
            if($scope.instrumento.bloques[bi] == bloque) {
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
                if($scope.instrumento.bloques[bi].preguntas[pi] == pregunta) {
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
                    if($scope.instrumento.bloques[bi].preguntas[pi].opciones[oi] == opcion) {
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
        console.log(indices.bloque_idx);
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
            console.log("nuevo");
            Instrumento.save($scope.instrumento, function(data) {
                if(data.id != null) {
                    $scope.instrumento = data;
                    $scope.texto_boton = "Actualizar";
                }
                else {
                    console.log(data);
                }
                Notificacion.success({ title: "Instrumento creado", message: "Puede continuar trabajando en el elemento" });
            }, 
            function(error) {
                Notification.error('No se pudo guardar el instrumento');
            });
        }
        else {
            console.log('existente');
            Instrumento.update($scope.instrumento, function(data) {
                $scope.instrumento = data;
                Notification.success("Instrumento actualizado");
            }, 
            function(error) {
                Notification.error('No se pudo guardar el instrumento');
            });
        }
    };
  }]);
