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
		var setViewport = function(){
			var meta = document.createElement('meta');
			meta.name= "viewport";
			meta.content = "width=device-width, initial-scale=1";
			window.top.document.getElementsByTagName('head')[0].appendChild(meta);
			console.log("meta");
		};
		
		$( document ).ready(function() {
		    setViewport();
		});
	});
	
	
	angular.module('myApp').controller('HomeController', 
    		function ($scope, $location, page) {
		$scope.page = page;
	});

})();
