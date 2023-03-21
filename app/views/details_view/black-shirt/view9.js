"use strict";

angular
  .module("myApp.view9", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view9", {
        templateUrl: "views/details_view/black-shirt/view9.html",
        controller: "View9Ctrl",
      });
    },
  ])

  .controller("View9Ctrl", [function () {}]);
