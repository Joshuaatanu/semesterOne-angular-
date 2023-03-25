"use strict";

angular
  .module("myApp.view15", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view15", {
        templateUrl: "views/others/view15.html",
        controller: "View15Ctrl",
      });
    },
  ])

  .controller("View15Ctrl", [function () {}]);
