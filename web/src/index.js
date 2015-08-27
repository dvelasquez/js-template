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
            .iconSet('action', 'resources/img/svg/icons/action-icons.svg', 24)
            .iconSet('alert', 'resources/img/svg/icons/alert-icons.svg', 24)
            .iconSet('av', 'resources/img/svg/icons/av-icons.svg', 24)
            .iconSet('communication', 'resources/img/svg/icons/communication-icons.svg', 24)
            .iconSet('content', 'resources/img/svg/icons/content-icons.svg', 24)
            .iconSet('device', 'resources/img/svg/icons/device-icons.svg', 24)
            .iconSet('editor', 'resources/img/svg/icons/editor-icons.svg', 24)
            .iconSet('file', 'resources/img/svg/icons/file-icons.svg', 24)
            .iconSet('hardware', 'resources/img/svg/icons/hardware-icons.svg', 24)
            .iconSet('icons', 'resources/img/svg/icons/icons-icons.svg', 24)
            .iconSet('image', 'resources/img/svg/icons/image-icons.svg', 24)
            .iconSet('maps', 'resources/img/svg/icons/maps-icons.svg', 24)
            .iconSet('navigation', 'resources/img/svg/icons/navigation-icons.svg', 24)
            .iconSet('notification', 'resources/img/svg/icons/notification-icons.svg', 24)
            .iconSet('social', 'resources/img/svg/icons/social-icons.svg', 24)
            .iconSet('toggle', 'resources/img/svg/icons/toggle-icons.svg', 24);

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/auth/login/");
    });
