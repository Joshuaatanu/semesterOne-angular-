"use strict";

angular
  .module("myApp.view12", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view12", {
        templateUrl: "views/details_view/green_dress/view12.html",
        controller: "View12Ctrl",
      });
    },
  ])

  .controller("View12Ctrl", [function () {}]);
