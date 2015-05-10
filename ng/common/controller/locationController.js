(function ()
{
    'use strict';
    
    angular.module('myApp').controller('LocationController', 
    		function ($scope, $location) {
    		
    	
//    	https://www.google.com/maps/place/Gainesville+Home+Cooking/@34.296189,-83.83918,15z/data=!4m2!3m1!1s0x0:0xd7d439217d2283fb
//    		
//    	https://maps.google.com/maps?ie=UTF8&cid=15908427961649518868&q=Jangsujang+Restaurant&gl=US&hl=en&t=m&ll=33.958863,-84.138837&spn=0.008543,0.013733&z=16&iwloc=A&source=embed
    	console.log("location Controller");
    	$scope.data = {
    		phone: "917-504-9043",
    	};
    	
    	$scope.data.call = "tel:" + $scope.data.phone;
    	
    	$scope.click = function() {
    	  console.log("click");
    	  $location.path('/buffet/gainesvillehomecooking');
    	};
    	
    	$scope.call = function() {
    		window.open('tel:917-504-9043');
    	};
	});
    

})();
