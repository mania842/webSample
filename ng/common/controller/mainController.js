(function ()
{
    'use strict';
    
    angular.module('myApp').controller('MainController', 
    		function ($scope) {
    	$scope.click = function() {
    	  console.log("click");
    	};
	});
    

})();
