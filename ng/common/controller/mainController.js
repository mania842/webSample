(function ()
{
    'use strict';
    
    angular.module('myApp').controller('MainController', 
    		function ($scope) {
    			
    	console.log("MainController start");
    	$scope.click = function() {
    		alert("asdfasdf");
    	  console.log("click");
    	};
	});
    

})();
