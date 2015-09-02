/**
 * Created by dvelur on 22-08-15.
 */
angular.module('MainApp')
    .controller('LayoutController', function($scope, $mdSidenav){


        $scope.smOptions = {
            smCurrent: 'favorite_outline',
            smInitIcon: 'favorite_outline',
            smEndIcon: 'favorite',
            smColor: 'black',
            options: {duration: 375, rotation: 'none'}
        };


        $scope.clickIcon = 'menu';
        $scope.clickIconMorph = function() {
            if ($scope.clickIcon === 'menu'){
                $scope.clickIcon = 'arrow_back';
            }
            else{
                $scope.clickIcon = 'menu';
            }
        };
        $scope.options = {duration: 375, rotation: 'none'};

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