(function ()
{
    'use strict';
    
    angular.module('myApp').controller('MainController', 
    		function ($scope) {
    	$scope.click = function() {
    		alert("asdfasdf");
    	  console.log("click");
    	};
	});
    

})();
