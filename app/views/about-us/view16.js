'use strict';

angular.module('myApp.view16', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view16', {
    templateUrl: 'views/about-us/view16.html',
    controller: 'View16Ctrl'
  });
}])

.controller('View16Ctrl', [function() {

}]);