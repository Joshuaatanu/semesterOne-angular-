'use strict';

angular.module('myApp.view7', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view7', {
    templateUrl: 'views/wishlist/view7.html',
    controller: 'View7Ctrl'
  });
}])

.controller('View7Ctrl', [function() {

}]);