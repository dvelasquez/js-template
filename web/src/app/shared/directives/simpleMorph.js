/**
 * Created by dvelur on 02-09-15.
 */
angular.module('MainApp')
.directive('simpleMorph', function(){
        return {
            restrict: 'AE',
            template : '<ng-md-icon icon="{{smOptions.smCurrent}}" style="fill: {{smOptions.smColor}}" options="{{smOptions.options}}" ng-click="smMorph(smOptions)"></ng-md-icon>',
            scope:{
                smOptions: '=smOptions'
            },
            link: function(scope, element, attrs){
                scope.smMorph = function(smOptions) {
                    if (smOptions.smCurrent === smOptions.smInitIcon){
                        smOptions.smCurrent = smOptions.smEndIcon;
                    }
                    else{
                        smOptions.smCurrent = smOptions.smInitIcon;
                    }
                };
            }
        };
    });