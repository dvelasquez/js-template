/**
 * Created by dvelur on 22-08-15.
 */
angular.module('MainApp')
    .controller('HomeController', function($scope, $state){
        $scope.login = function(){
            $state.go('');
        };
    })
    .config(function($stateProvider){
        $stateProvider.state('main.home', {
            url: '/home/',
            templateUrl: 'app/main/home/html/home.html',
            controller: 'HomeController'
        });
    });