(function() {
	'use strict';

	angular.module('myApp').directive('myMap', function() {
	    // directive link function
	    var link = function($scope, element, attrs) {
	        var map, infoWindow;
	        var markers = [];
	        
	        if (navigator.geolocation) {
	    		navigator.geolocation.getCurrentPosition(function(position){
	    			$scope.$apply(function(){
	    				console.log("position", position.coords.latitude);
	    				console.log("position", position.coords.longitude);
	    				$scope.position = position.coords;
	    				initMap();
	    			});
	    	    });
	    	}
	        
	        // map config
	        var mapOptions = {
	            center: new google.maps.LatLng(50, 2),
	            zoom: 4,
	            mapTypeId: google.maps.MapTypeId.ROADMAP,
	            scrollwheel: true
	        };
	        
	        
	        
	        // init the map
	        function initMap() {
	            if (map === void 0) {
	            	if ($scope.setCurrent) {
	    	        	mapOptions.center = new google.maps.LatLng($scope.position.latitude, $scope.position.longitude);
	    	        }
	            	
	                map = new google.maps.Map(element[0], mapOptions);
	                setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
	    	        setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
	    	        setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
	    	        
	    	        if ($scope.setCurrent) {
	    	        	setMarker(map, mapOptions.center, 'Yong', 'Text here', true);
	    	        }
	            }
	        }    
	        
	        // place a marker
	        function setMarker(map, position, title, content, isMyLocation) {
	            var marker;
	            var markerOptions = {
	                position: position,
	                map: map,
	                title: title,
	            };
	            if (isMyLocation) {
	            	markerOptions.animation =  google.maps.Animation.DROP;
	            	markerOptions.icon = 'ng/common/images/my-location-marker.png';
	            }

	            marker = new google.maps.Marker(markerOptions);
	            markers.push(marker); // add marker to array
	            
	            if (isMyLocation) {
	            	google.maps.event.addListener(marker, 'click', function () {
	            		// close window if not undefined
		                if (infoWindow !== void 0) {
		                    infoWindow.close();
		                }
		                
		                if (marker.getAnimation() != null) {
		                    marker.setAnimation(null);
		                  } else {
		                    marker.setAnimation(google.maps.Animation.BOUNCE);
		                  }
	            	});
	            } else {
	            	google.maps.event.addListener(marker, 'click', function () {
		                // close window if not undefined
		                if (infoWindow !== void 0) {
		                    infoWindow.close();
		                }
		                // create new window
		                var infoWindowOptions = {
		                    content: content
		                };
		                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
		                infoWindow.open(map, marker);
		            });
	            }
	        }
	    };
	    
	    return {
	        restrict: 'E',
	        template: '<div id="gmaps"></div>',
	        replace: true,
	        link: link,
	        scope:
			{
				setCurrent: '=',
			}
	    };
	});
})();
