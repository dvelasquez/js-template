/**
 * Created by dvelur on 22-08-15.
 */
angular.module('MainApp')
    .controller('HomeController', function($scope, $state){
       alert("hola");
    })
    .config(function($stateProvider){
        $stateProvider.state('main.home', {
            url: '/home/',
            views: {
                content: {
                    templateUrl: 'app/main/home/html/home.html',
                    controller: 'HomeController'
                }
            }

        });
    });