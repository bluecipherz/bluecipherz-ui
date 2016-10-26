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

  })


  .controller('notifyctrl',function($scope){

    $scope.notifydata=[
      {user:"Waxx",desc:'Ari medichu',amount:100},
      {user:"Rixx",desc:'Vegetables',amount:20},
      {user:"Rosh",desc:'Water refilled',amount:30},
      {user:"Waxx",desc:'Deposit',amount:20}

    ]
    // $scope.employees = arremployees;
  });
