"use strict";

angular
  .module("myApp.view4", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view4", {
        templateUrl: "views/categories/view4.html",
        controller: "View4Ctrl",
      });
    },
  ])

  .controller("View4Ctrl", [function () {}]);
