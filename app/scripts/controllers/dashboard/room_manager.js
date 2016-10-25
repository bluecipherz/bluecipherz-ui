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
// $scope.reloadPage = function(){$window.location.reload();}


/*
  Different categories of notification cat

  ROOM_WALLET


  Different types of notification

 FUND_INSERTED
 FUND_RETRIEVED
 ITEM_PURCHASED


 */
