'use strict';

/**
 * @ngdoc function
 * @name alFjrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alFjrApp
 */

angular.module('alFjrApp')
  .controller('testCtrl', function ($rootScope,$state,headerService) {  
    var vm = this;
    headerService.setPage();

  })