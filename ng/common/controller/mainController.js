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
    	
    	console.log("navigator.geolocation", navigator.geolocation);
//    	if (navigator.geolocation) {
//    		navigator.geolocation.getCurrentPosition(function(position){
//    			$scope.$apply(function(){
//    				console.log("position", position.coords.latitude);
//    				console.log("position", position.coords.longitude);
//    				$scope.position = position;
//    			});
//    	    });
//    	}


	});
    

})();
