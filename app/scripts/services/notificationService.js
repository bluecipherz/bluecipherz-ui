'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.powerprogress
 * @description
 * # powerprogress
 * Service in the bluroeApp.
 */
angular.module('BlueUI')
  .service('notificationService', function (TokenHandler, $resource, loginService, $cookieStore ) {
    var vm = this;
    vm.notification = false;
    vm.user = $cookieStore.get('userData');
    console.log(vm.user.id);


    var notificationQuery = TokenHandler.wrapActions(
      $resource(loginService.host + '/notification/'+vm.user.id),
      ['query']
    );

    vm.getNotification = function (callback) {
      if(vm.notification){
        callback(vm.notification);
      }else{
        notificationQuery.query({}).$promise.then(function(results) {
          vm.notification = results;
          callback(vm.notification);
        });
      }
    };

    vm.categories = {
      ROOM_WALLET:'ROOM_WALLET',
    };
    vm.types = {
      FUND_INSERTED : 'FUND_INSERTED',
      FUND_RETRIEVED : 'FUND_RETRIEVED',
      ITEM_PURCHASED : 'ITEM_PURCHASED',}
  });
