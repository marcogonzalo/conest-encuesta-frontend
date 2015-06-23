'use strict';

/**
 * @ngdoc function
 * @name sedadApp.controller:InstrumentosCtrl
 * @description
 * # InstrumentosCtrl
 * Controller of the sedadApp
 */
angular.module('sedadApp')
  .controller('InstrumentosEditCtrl', ['$scope', function ($scope) {
    $scope.instrumento = {
        "id": 1,
        "nombre": "Evaluación Docente (rev.2014)",
        "descripcion": "Instrumento para la evaluación y diagnóstico de la actividad docente (Revisado en 2014)",
        "created_at": "2015-02-18T18:49:01.320Z",
        "updated_at": "2015-02-18T18:49:01.320Z",
        "bloques": [
            {
                "id": 1,
                "nombre": "Teoría",
                "descripcion": "Preguntas sobre aspectos teóricos de la asignatura",
                "tipo": "T",
                "preguntas": [
                    {
                        "id": 1,
                        "interrogante": "La densidad de contenidos es asimilable en un trimestre",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 1,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 2,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 3,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 4,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 5,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "nombre": "Práctica",
                "descripcion": "Preguntas sobre aspectos prácticos de la asignatura",
                "tipo": "P",
                "preguntas": []
            },
            {
                "id": 3,
                "nombre": "Laboratorio",
                "descripcion": "Preguntas sobre el laboratorio de la asignatura",
                "tipo": "L",
                "preguntas": [
                    {
                        "id": 2,
                        "interrogante": "Dotación de la universidad de materiales y equipos requeridos",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 6,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 7,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 8,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 9,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 10,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 4,
                "nombre": "Docente",
                "descripcion": "Preguntas sobre el desempeño del docente de la asignatura",
                "tipo": "D",
                "preguntas": [
                    {
                        "id": 3,
                        "interrogante": "¿Expuso claramente el programa al inicio del curso?",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 11,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 12,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 13,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 14,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 15,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "interrogante": "¿Informó con precisión sobre el proceso de evaluación?",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 16,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 17,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 18,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 19,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 20,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "interrogante": "Le dedicó el tiempo apropiado a cada tema del programa",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 21,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 22,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 23,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 24,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 25,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "interrogante": "Desarrolló ordenadamente las actividades docentes",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 26,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 27,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 28,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 29,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 30,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "interrogante": "Logró comunicarse efectivamente con el estudiante",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 31,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 32,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 33,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 34,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 35,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "interrogante": "Orientó sobre el uso de material necesario para el aprendizaje",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 36,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 37,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 38,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 39,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 40,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "interrogante": "Indicó claramente la relación entre los temas del curso",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 41,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 42,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 43,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 44,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 45,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "interrogante": "Adaptó sus explicaciones para hacerse entender mejor",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 46,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 47,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 48,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 49,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 50,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 11,
                        "interrogante": "Explicó claramente la relación entre la teoría y la práctica",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 51,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 52,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 53,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 54,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 55,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 12,
                        "interrogante": "Fue receptivo a las intervenciones de los estudiantes",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 56,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 57,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 58,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 59,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 60,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 13,
                        "interrogante": "Fomentó un ambiente propicio para el aprendizaje",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 61,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 62,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 63,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 64,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 65,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 14,
                        "interrogante": "Mantuvo criterios claros de evaluación",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 66,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 67,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 68,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 69,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 70,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 15,
                        "interrogante": "Muestra disposición para atender individualmente a los estudiantes",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 71,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 72,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 73,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 74,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 75,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 16,
                        "interrogante": "Mantuvo una actitud respetuosa hacia los estudiantes",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 76,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 77,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 78,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 79,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 80,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 17,
                        "interrogante": "El profesor cumplió con el horario de clases",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 81,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 82,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 83,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 84,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 85,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 18,
                        "interrogante": "Planificó tiempo suficiente para las evaluaciones",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 86,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 87,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 88,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 89,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 90,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 19,
                        "interrogante": "Las evaluaciones se correspondieron con lo desarrollado durante el curso",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 91,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 92,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 93,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 94,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 95,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 20,
                        "interrogante": "Realizó la entrega y revisión oportuna de los resultados de las evaluaciones",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 96,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 97,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 98,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 99,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 100,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 21,
                        "interrogante": "Motivó la búsqueda activa de conocimiento",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 101,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 102,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 103,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 104,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 105,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 22,
                        "interrogante": "Estimuló la participación del estudiante en el proceso de aprendizaje",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 106,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 107,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 108,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 109,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 110,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 23,
                        "interrogante": "Evalúe el desempeño global del profesor",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 111,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 112,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 113,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 114,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 115,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 24,
                        "interrogante": "¿Avalaría que su profesor fuera postulado a la destacada labor docente?",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 116,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 117,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 118,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 119,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 120,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 5,
                "nombre": "General",
                "descripcion": "Preguntas sobre la activiidad de la asignatura en general",
                "tipo": "G",
                "preguntas": [
                    {
                        "id": 25,
                        "interrogante": "Preparación previa para cursar esta asignatura",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 121,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 122,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 123,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 124,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 125,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 26,
                        "interrogante": "Dedicación de tiempo y esfuerzo a este curso",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 126,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 127,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 128,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 129,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 130,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 27,
                        "interrogante": "Contribución del curso a su formación como profesional",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 131,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 132,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 133,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 134,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 135,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 28,
                        "interrogante": "Las actividades están bien planificadas para obtener resultados",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 136,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 137,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 138,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 139,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 140,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 29,
                        "interrogante": "El esfuerzo requerido se corresponde con el número de créditos",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 141,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 142,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 143,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 144,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 145,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 30,
                        "interrogante": "Disponibilidad personal de libros, guías y material docente requeridos",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 146,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 147,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 148,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 149,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 150,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 31,
                        "interrogante": "Aprendizaje efectivo que usted considera haber logrado en el curso",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 151,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 152,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 153,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 154,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 155,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 32,
                        "interrogante": "Grado de dificultad del curso",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 156,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 157,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 158,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 159,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 160,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    },
                    {
                        "id": 33,
                        "interrogante": "Expectativa de calificación final",
                        "descripcion": null,
                        "tipo_pregunta": {
                            "public_send": "valor_html",
                            "nombre": "nombre",
                            "valor": "valor",
                            "valor_html": "valor_html"
                        },
                        "opciones": [
                            {
                                "id": 161,
                                "etiqueta": "1",
                                "valor": "1"
                            },
                            {
                                "id": 162,
                                "etiqueta": "2",
                                "valor": "2"
                            },
                            {
                                "id": 163,
                                "etiqueta": "3",
                                "valor": "3"
                            },
                            {
                                "id": 164,
                                "etiqueta": "4",
                                "valor": "4"
                            },
                            {
                                "id": 165,
                                "etiqueta": "5",
                                "valor": "5"
                            }
                        ]
                    }
                ]
            }
        ]
    };

    $scope.quitarBloque = function(bloque) {
        for(var bi = 0, nb = $scope.instrumento.bloques.length; bi < nb; bi++) {
            if($scope.instrumento.bloques[bi].id == bloque.id) {
                $scope.instrumento.bloques.splice(bi,1);
                break;
            }
        }
    }

    $scope.quitarPregunta = function(pregunta) {
        for(var bi = 0, nb = $scope.instrumento.bloques.length; bi < nb; bi++) {
            var pi = 0; // index de la pregunta
            var np = $scope.instrumento.bloques[bi].preguntas.length;
            for(pi = 0; pi < np; pi++) {        
                if($scope.instrumento.bloques[bi].preguntas[pi].id == pregunta.id) {
                    console.log(pi);
                    break;
                }
            }     
            if(pi < np) {
                $scope.instrumento.bloques[bi].preguntas.splice(pi,1);
                break;
            }
        }
    }

    $scope.quitarOpcion = function(opcion) {
        console.log(opcion);
        var encontrado = false;
        for(var bi = 0, nb = $scope.instrumento.bloques.length; bi < nb; bi++) {
            for(var pi = 0, np = $scope.instrumento.bloques[bi].preguntas.length; pi < np; pi++) {
                var oi = 0; // index de la pregunta
                var no = $scope.instrumento.bloques[bi].preguntas[pi].opciones.length;
                for(oi = 0; oi < no; oi++) {
                    if($scope.instrumento.bloques[bi].preguntas[pi].opciones[oi].id == opcion.id) {
                        console.log(oi);
                        encontrado = true;
                        break;
                    }
                }
                if(oi < no) {
                    $scope.instrumento.bloques[bi].preguntas[pi].opciones.splice(oi,1);
                    break;
                }
            }
            if(encontrado) {
                break;
            }
        }
    }
  }]);
