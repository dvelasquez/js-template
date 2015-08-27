/**
 * Created by dvelur on 22-08-15.
 */
angular.module('MainApp',[
    'ngAnimate',
    'ngMaterial',
    'ui.router',
    'ngStorage'
])
    .run(function () {

    })
    .constant('CONFIGURATION', {
        QAS: {
            DEFAULT_SYNC_TIME: 10000,
            API_ENDPOINT: 'http://localhost/js-template/v1/'
        }
    })
    .config(function($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider){
        //theming
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('light-blue');

        //icons
        $mdIconProvider
            .iconSet('action', 'resources/img/svg/action-icons.svg', 24)
            .iconSet('alert', 'resources/img/svg/alert-icons.svg', 24)
            .iconSet('av', 'resources/img/svg/av-icons.svg', 24)
            .iconSet('communication', 'resources/img/svg/communication-icons.svg', 24)
            .iconSet('content', 'resources/img/svg/content-icons.svg', 24)
            .iconSet('device', 'resources/img/svg/device-icons.svg', 24)
            .iconSet('editor', 'resources/img/svg/editor-icons.svg', 24)
            .iconSet('file', 'resources/img/svg/file-icons.svg', 24)
            .iconSet('hardware', 'resources/img/svg/hardware-icons.svg', 24)
            .iconSet('icons', 'resources/img/svg/icons-icons.svg', 24)
            .iconSet('image', 'resources/img/svg/image-icons.svg', 24)
            .iconSet('maps', 'resources/img/svg/maps-icons.svg', 24)
            .iconSet('navigation', 'resources/img/svg/navigation-icons.svg', 24)
            .iconSet('notification', 'resources/img/svg/notification-icons.svg', 24)
            .iconSet('social', 'resources/img/svg/social-icons.svg', 24)
            .iconSet('toggle', 'resources/img/svg/toggle-icons.svg', 24);

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/auth/login/");
    });
