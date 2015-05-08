/**
 * Common App Application module
 */

(function() {
	'use strict';

	// Define our module.
	var module = angular.module('myApp', [ 'ngRoute', 'buffetModule' ]);

	// Configure app
	module.config(function($routeProvider) {
		$routeProvider.when('/', { templateUrl : 'ng/common/html/main.html' })
		.when('/test', { templateUrl : 'ng/common/html/test.html' })
		.otherwise({ redirectTo : '/' });
	});

	module.factory('page', function() {
		var title = 'default';

		return {
			title : function() {
				return title;
			},
			setTitle : function(newTitle) {
				title = newTitle;
			}
		};
	});
	
	module.run(function($location) {
		console.log("$location.url()", $location.url());
		console.log("$location.absUrl()", $location.absUrl());
		console.log("$location.path()", $location.path());
		
		var setViewport = function(){
			var meta = document.createElement('meta');
			meta.name= "viewport";
			meta.content = "width=device-width, initial-scale=1";
			document.getElementsByTagName('head')[0].appendChild(meta);
			console.log("meta");
		};
		
		$( document ).ready(function() {
		    setViewport();
		});
//		setViewport();
	});
	
	
	angular.module('myApp').controller('HomeController', 
    		function ($scope, $location, page) {
		
//		console.log("$location.path()", $location.path());
		$scope.page = page;
	});

})();
