/**
 * CSMD - controller - Landing page - header - menu
 */
(function ()
{
    'use strict';

    angular.module('myApp').controller('webFooterController',
    function ($location, $scope, webId) {
    	$scope.items = {};
    	$scope.domain = webId.getWebDomain();
    	$scope.items = webId.getWebFooter();
    	$scope.mode = [];
    	
       	$scope.$on('service.footer:updated', function(event, data, mode) {
       		if (mode) {
       			$scope.mode.push(mode);
       		} else {
       			$scope.mode = [];
       		}
       		$scope.buttonClicked(data);
    	});
       	
       	$scope.$on('service.footer.item:updated', function(event, data, domain) {
       		console.log("service.footer.item:updated", data);
       		$scope.items = data;
       		$scope.domain = domain;
       	});
    	
        $scope.buttonClicked = function(item) {
        	$location.path(item.PATH + $scope.domain);
//            if(section == $scope.sections[0].name){
////            	if ($scope.mode.length > 0) {
////            		var mode = $scope.mode.pop();
////            		csmdHeaderService.moveToMode(mode);
////            		console.log($scope.mode);
////            	} else {
////            		$scope.selected = null;
////            		window.history.back();
////            	}
//            	$scope.selected = null;
//            	window.history.back();
//            }else if(section == $scope.sections[1].name){
//            	$scope.selected = $scope.sections[1];
////            	Bones.redirect('/report/WeeklyStatusReport');
//            }else if(section == $scope.sections[2].name){
//            	$scope.selected = $scope.sections[2];
////            	Bones.redirect('/report/WeeklyStatusSelector');
//            }else if(section == $scope.sections[3].name){
//            	$scope.selected = $scope.sections[3];
////            	Bones.redirect('/about');
//            }
        };
        $scope.isSelected = function(section) {
            return $scope.selected === section;
        };
//        $scope.isDisabled = function() {
//        	return !csmdUser.isAuthorized();
//        };
    });
})();
