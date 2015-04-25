(function ()
{
    'use strict';
    
    angular.module('myApp').controller('MainController', 
    		function ($scope, $location) {
    			
    	console.log("MainController start");
    	
    	$scope.data = {
    		phone: "917-504-9043",
    	};
    	
    	$scope.data.call = "tel:" + $scope.data.phone;
    	
    	$scope.click = function() {
    	  console.log("click");
    	  $location.path('/test');
    	};
    	
    	$scope.call = function() {
    		window.open('tel:917-504-9043');
    	};
	});
    

})();
