'use strict';

/**
 * @ngdoc function
 * @name alFjrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alFjrApp
 */

angular.module('BlueUI')
  .controller('WorkCtrl', function ($rootScope,$state,headerService) {
    var vm = this;
    headerService.setPage();

  })
