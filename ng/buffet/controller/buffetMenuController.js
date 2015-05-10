(function ()
{
    'use strict';
    
    angular.module('buffetModule').controller('BuffetMenuController', 
    		function ($http, $scope, $location, $routeParams, webId) {
    	
    	$scope.data = webId.loadWebData($routeParams.homepage);
//    	$scope.$on('service.webId:updated', function(event, data, domain) {
//    		console.log("service web id updated");
//    		$scope.data = data;
//       	});
    	
    	
    	$scope.click = function() {
    	  console.log("click");
    	  $location.path('/test');
    	};
    	
    	$scope.call = function() {
    		window.open('tel:917-504-9043');
    	};
    	
	});
    

})();
