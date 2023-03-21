"use strict";

angular
  .module("myApp.view9", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view9", {
        templateUrl: "views/details_view/cream_dress/view9.html",
        controller: "View9Ctrl",
      });
    },
  ])

  .controller("View9Ctrl", [function () {}]);
