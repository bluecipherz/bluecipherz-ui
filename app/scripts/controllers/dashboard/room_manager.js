'use strict';

/**
 * @ngdoc function
 * @name alFjrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alFjrApp
 */

angular.module('BlueUI')
  .controller('RoomManagerCtrl', function ($rootScope,$state,headerService,roomManagerService) {
    var vm = this;
    headerService.setPage();
    vm.walletObject = {wallet:{}, reports:[]};

    roomManagerService.getRoomWallet(function (result) {
      vm.walletObject = result;
    });

  })


  .controller('notifyctrl',function($scope){

    $scope.notifydata=[
      {user:"Waxx",desc:'Ari medichu',amount:100},
      {user:"Rixx",desc:'Vegetables',amount:20},
      {user:"Rosh",desc:'Water refilled',amount:30},
      {user:"Waxx",desc:'Deposit',amount:20}

    ]
    // $scope.employees = arremployees;
  })

  .controller('ReportCtrl',function ($scope, $timeout) {
    var vm = this;
    vm.refreshing = false;
    vm.refresh = function() {
      if(!vm.refreshing){
        vm.refreshing = true;

        // do ome code to refresh data

        $timeout(function () {
          vm.refreshing = false;
        },3000);

      }
    };

  });





/*
  Different categories of notification cat

  ROOM_WALLET


  Different types of notification

 FUND_INSERTED
 FUND_RETRIEVED
 ITEM_PURCHASED


 */
