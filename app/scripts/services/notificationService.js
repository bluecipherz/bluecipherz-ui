'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.powerprogress
 * @description
 * # powerprogress
 * Service in the bluroeApp.
 */
angular.module('alFjrApp')
  .service('notificationService', function (TokenHandler, $resource, loginService) {
    var vm = this;
    // vm.wallet = false;
    //
    //
    // var walletQuery = TokenHandler.wrapActions(
    //   $resource(loginService.host + '/room_manager'),
    //   ['get']
    // );
    //
    // vm.getRoomWallet = function (callback) {
    //   if(vm.wallet){
    //     callback(vm.wallet);
    //   }else{
    //     walletQuery.get({}).$promise.then(function(results) {
    //       vm.wallet = results;
    //       callback(vm.wallet);
    //     });
    //   }
    // };

    vm.categories = {
      ROOM_WALLET:'ROOM_WALLET',
    };
    vm.types = {
      FUND_INSERTED : 'FUND_INSERTED',
      FUND_RETRIEVED : 'FUND_RETRIEVED',
      ITEM_PURCHASED : 'ITEM_PURCHASED',}
  });
