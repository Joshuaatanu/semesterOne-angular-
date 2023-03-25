"use strict";

angular
  .module("myApp.view14", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view14", {
        templateUrl: "views/T.P Wears/view14.html",
        controller: "View14Ctrl",
      });
    },
  ])

  .controller("View14Ctrl", [function () {}]);
