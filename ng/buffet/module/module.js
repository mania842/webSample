/**
 * Buffet Application module
 * 
 * gainesvillehomecooking.com
 */

(function() {
	'use strict';

	// Define our module.
	var module = angular.module('buffetModule', [ 'ngRoute' ]);
	// Configure app
	module.config(function($routeProvider) {
		$routeProvider.when('/buffet/:homepage', {
			redirectTo : '/buffet/menu/:homepage'
				
		}).when('/buffet/menu/:homepage', {
			templateUrl: 'ng/buffet/html/buffetMenu.html',
			controller: 'BuffetMenuController'
				
		}).when('/buffet/price/:homepage', {
			templateUrl: 'ng/buffet/html/buffetPrice.html',
			controller: 'BuffetPriceController'
		});
//		.otherwise({ redirectTo : '/' });
	});	

})();
