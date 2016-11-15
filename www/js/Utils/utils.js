(function () {
  'use strict';

  angular
    .module('starter.controllers')
    .factory('epUtils',epUtils);

  epUtils.$inject= [];

  function epUtils(){
    var factory ={
      convertToList : convertToList,
    };

    return factory;

    //////////////////////////////////////
    function convertToList(sqliteResponse){
        var items = [];
        if(sqliteResponse.length > 0){
            for(var i = 0; i < sqliteResponse.length ; i++){
                items.push(sqliteResponse.item(i));
            }
        }        
        return items;
    }
  }  

})();
