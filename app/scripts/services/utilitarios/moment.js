'use strict';

/**
 * @ngdoc service
 * @name sedadApp.Fechas
 * @description
 * # Fechas
 * Factory in the sedadApp.
 */

angular.module('sedadApp')
  /*.config(function($momentProvider){
    $momentProvider
      .asyncLoading(false)
      .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
  })*/
  .filter("mostrarFechaHoraAMPM",function(){
    return function(fecha_hora_iso) {
      return moment(fecha_hora_iso).format("DD.MM.YY hh:mma");
    };
  });
