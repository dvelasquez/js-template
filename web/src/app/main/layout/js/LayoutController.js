/**
 * Created by dvelur on 22-08-15.
 */
angular.module('MainApp')
    .controller('LayoutController', function($scope, $mdSidenav){
        //-------------------------------------------------------------------
        $scope.close = function () {
            $mdSidenav('left').close();
        };
        //-------------------------------------------------------------------

        //-------------------------------------------------------------------
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
        //-------------------------------------------------------------------
        //-------------------------------------------------------------------
        $scope.toggleRight = function () {
            $mdSidenav('right').toggle();
        };
    })
    .config(function($stateProvider){
        $stateProvider.state('main', {
            templateUrl: 'app/main/layout/html/layout.html',
            controller: 'LayoutController',
            abstract: true
        });
    });