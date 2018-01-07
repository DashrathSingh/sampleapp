'use strict';
app.controller('indexController', ['$scope', '$location', function ($scope, $location) {



    $scope.logindata = { Username: "Admin", Password: "Admin" }

    $scope.Isauthorize = "false";
    $scope.Isauthorize = localStorage.getItem("Authenticate");




    $scope.login = function () {

        if ($scope.logindata.Username == "Admin" && $scope.logindata.Password == "Admin") {

            $location.path('/dashboard');

            setTimeout(function () {
                window.location.reload();
            }, 100)


            localStorage.setItem("Authenticate", "true");
            // Retrieve
            $scope.Isauthorize = localStorage.getItem("Authenticate");




        }

        else {
            alert("Invalid Username or Password");
        }

    }

    $scope.logout = function () {
        localStorage.setItem("Authenticate", "false");
        $scope.Isauthorize = localStorage.getItem("Authenticate");
        $location.path('/login');
    }



    $scope.$on("$locationChangeStart", function (event, next, current) {
        var Isauthorize = localStorage.getItem("Authenticate");
        var _requestedPath = $location.path();
        if (Isauthorize != "true") {
            if (_requestedPath != "/about" && _requestedPath != "/home" && _requestedPath != "/pricing") {

                $location.path("/login");
            }
        }

    });


}]);