/**
 * App Application module
 */

(function ()
{
    'use strict';
    
    // Define our module.
    var module = angular.module('myApp', ['ngRoute']);
    
    // Configure app
    module.config(
	function($routeProvider) 
    {
		$routeProvider
		.when('/', {templateUrl: 'ng/common/html/main.html'})
		.when('/test', {templateUrl: 'ng/common/html/test.html'})
		.otherwise({redirectTo:'/'})
		;
	});
    
})();
