/**
 * Created by dvelur on 22-08-15.
 */
angular.module('MainApp')
    .controller('LoginController', function($scope, $state){
        $scope.login = function(){
            $state.go('main.home');
        };

        $scope.register = function(){

        };
    })
    .config(function($stateProvider){
        $stateProvider.state('auth', {
            url: '/auth/login/',
            templateUrl: 'app/main/auth/html/login.html',
            controller: 'LoginController'
        });
    });