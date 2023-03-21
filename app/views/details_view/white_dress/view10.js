"use strict";

angular
  .module("myApp.view10", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view10", {
        templateUrl: "views/details_view/white_dress/view10.html",
        controller: "View10Ctrl",
      });
    },
  ])

  .controller("View10Ctrl", [function () {}]);
