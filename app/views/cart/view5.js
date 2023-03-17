'use strict';

angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'views/cart/view5.html',
    controller: 'View5Ctrl'
  });
}])

.controller('View5Ctrl', [function() {

}]);