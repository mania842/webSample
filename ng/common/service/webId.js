/**
 * Buffet - web data model
 */
(function ()
{
    'use strict';
    
    angular.module('myApp').service('webId', 
	function ($http, $rootScope, page) {
    	var service = this;
    	
    	// The cached data model object
    	service.web = { };
	    
	    //-----------------------------------------------------------------------

    	/**
    	 * Get and cache current web
    	 */
    	service.loadWebData = function(homepage) {
    		if (service.getDataPromise && service.homepage === homepage) {
    			// Kick off a digest since we're bypassing the $http call
    			$digest();
			} else {
    			service.getDataPromise = $http.get('json/' + homepage + ".json").success(function(data) {
    				service.web = data;
    				service.homepage = homepage;
   	    		   	page.setTitle(data.TITLE);
   	    		   	
   	    		   	$rootScope.$broadcast('service.footer.item:updated', service.getWebFooter(), service.getWebDomain());
    	    	});
			}
    		
    		return service.getDataPromise;
    	};

//    	/**
//    	 * Load user info when service is created
//    	 */
//    	service.loadWebData();
    	
	    //-----------------------------------------------------------------------
    	
    	/**
    	 * Get web
    	 */
    	service.getWeb = function() {
    		return service.web;
    	};
    	
    	service.getWebFooter = function() {
    		return service.web ? service.web.FOOTER : {};
    	};
    	
    	service.getWebDomain = function() {
    		return service.web ? service.web.DOMAIN : {};
    	};
    	
	    //-----------------------------------------------------------------------
	});
})();
