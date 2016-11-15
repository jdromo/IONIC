(function () {
    'use strict';

    angular
    .module('starter.controllers')
    .directive('ngTest', function () {
        return {
            restrict : 'EA',
            scope : {
                epNumber: '='
            },
            link: function (scope, element){
                var counterMax;
                scope.$watch('epNumber', function (newValue, oldValue) {
						if(newValue) {
							counterMax = newValue;
						}
					}, true);
            }
        };
    });
})