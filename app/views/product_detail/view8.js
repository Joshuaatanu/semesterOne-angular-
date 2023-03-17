"use strict";

angular
  .module("myApp.view8", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view8", {
        templateUrl: "views/product_detail/view8.html",
        controller: "View8Ctrl",
      });
    },
  ])

  .controller("View8Ctrl", [function () {}]);
