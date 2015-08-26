/**
 * Created by dvelur on 22-08-15.
 */
angular.module('MainApp')
    .controller('LayoutController', function($scope){
        alert("test");
    })
    .config(function($stateProvider){
        $stateProvider.state('app', {
            templateUrl: 'main/app/layout/html/layout.html',
            controller: 'LayoutController',
            abstract: true
        });
    });