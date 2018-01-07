
var app = angular.module('POC', ['ngRoute', 'ngSanitize','POC1']);

app.config(function ($routeProvider) {

  

    $routeProvider.when("/login", {
        controller: "indexController",
        templateUrl: "app/views/login.html"
    });

    

    $routeProvider.when("/home", {
        controller: "indexController",
        templateUrl: "app/views/home.html"
    });

    $routeProvider.when("/about", {
        controller: "indexController",
        templateUrl: "app/views/about.html"
    });


    $routeProvider.when("/pricing", {
        controller: "indexController",
        templateUrl: "app/views/pricing.html"
    });

    //$routeProvider.when("/dashboard", {
    //    controller: "indexController",
    //    templateUrl: "app/views/dashboard.html"
    //});

    //$routeProvider.when("/setting", {
    //    controller: "indexController",
    //    templateUrl: "app/views/setting.html"
    //});

 

    

    $routeProvider.otherwise({ redirectTo: "/login" });

});



var app2 = angular.module('POC1', ['ngRoute', 'ngSanitize']);

app2.config(function ($routeProvider) {



  

    $routeProvider.when("/dashboard", {
        controller: "indexController",
        templateUrl: "app/views/dashboard.html"
    });

    $routeProvider.when("/setting", {
        controller: "indexController",
        templateUrl: "app/views/setting.html"
    });





    $routeProvider.otherwise({ redirectTo: "/login" });

});





