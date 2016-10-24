'use strict';

/**
 * @ngdoc function
 * @name alFjrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alFjrApp
 */

angular.module('alFjrApp')
  .controller('RoomManagerCtrl', function ($rootScope,$state,headerService,roomManagerService) {
    var vm = this;
    headerService.setPage();

    vm.walletObject = {wallet:{}, reports:[]};
    roomManagerService.getRoomWallet(function (result) {
      vm.walletObject = result;
    });
  });
