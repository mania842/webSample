(function ()
{
    'use strict';
    
    angular.module('myApp').controller('MainController', 
    		function ($scope, $location) {
    			
    	console.log("MainController start");
    	$scope.click = function() {
    	  console.log("click");
    	  $location.path('/test');
    	};
	});
    

})();
