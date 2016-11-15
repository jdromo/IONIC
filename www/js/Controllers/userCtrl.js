(function () {
  'use strict';

  angular
   .module('starter.controllers')
   .controller('UserCtrl',UserCtrl);

   UserCtrl.$inject = ['$scope','dbService'];

   function UserCtrl($scope,dbService){
     var vm = this;
     //properties
     vm.user={}; 

     //methods 
     vm.createUser = createUser;
     vm.getUserInfo = getUserInfo;
     
     init();

     ////////////////////////////////////////
     
     function createUser(){
        vm.user.docType = "user"; 
        return dbService.addItem(vm.user)
         .then(function (response){
             console.log(response);
         });
     }

     function getUserInfo(){
        return dbService.getAll("user")
         .then(function (response){
             console.log(response);
         });
     }

     function init(){
         vm.user.firstName = 'David';
         vm.user.lastName = 'Romo';
     }
   };

})();