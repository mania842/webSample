(function ()
{
    'use strict';
    
    angular.module('buffetModule').controller('BuffetMenuController', 
    		function ($http, $scope, $location, $routeParams, page, webId) {
    	
    	webId.loadWebData($routeParams.homepage);
    	
    	console.log("Buffet Menu Controller start", $location.path() + " " + $routeParams.homepage);
//    	page.setTitle("gainesvillehomecooking");
    	
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
