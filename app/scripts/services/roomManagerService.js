'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.powerprogress
 * @description
 * # powerprogress
 * Service in the bluroeApp.
 */
angular.module('BlueUI')
  .service('roomManagerService', function (TokenHandler, $resource, loginService) {
    var vm = this;
    vm.wallet = false;


    var walletQuery = TokenHandler.wrapActions(
      $resource(loginService.host + '/room_manager'),
      ['get']
    );

    vm.getRoomWallet = function (callback) {
      if(vm.wallet){
        callback(vm.wallet);
      }else{
        walletQuery.get({}).$promise.then(function(results) {
          vm.wallet = results;
          callback(vm.wallet);
        });
      }
    };
  });
