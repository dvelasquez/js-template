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
            .primaryPalette('deep-orange')
            .accentPalette('light-blue');

        //icons
        $mdIconProvider
            .iconSet('action', 'bundles/web/icons/action-icons.svg', 24)
            .iconSet('alert', 'bundles/web/icons/alert-icons.svg', 24)
            .iconSet('av', 'bundles/web/icons/av-icons.svg', 24)
            .iconSet('communication', 'bundles/web/icons/communication-icons.svg', 24)
            .iconSet('content', 'bundles/web/icons/content-icons.svg', 24)
            .iconSet('device', 'bundles/web/icons/device-icons.svg', 24)
            .iconSet('editor', 'bundles/web/icons/editor-icons.svg', 24)
            .iconSet('file', 'bundles/web/icons/file-icons.svg', 24)
            .iconSet('hardware', 'bundles/web/icons/hardware-icons.svg', 24)
            .iconSet('icons', 'bundles/web/icons/icons-icons.svg', 24)
            .iconSet('image', 'bundles/web/icons/image-icons.svg', 24)
            .iconSet('maps', 'bundles/web/icons/maps-icons.svg', 24)
            .iconSet('navigation', 'bundles/web/icons/navigation-icons.svg', 24)
            .iconSet('notification', 'bundles/web/icons/notification-icons.svg', 24)
            .iconSet('social', 'bundles/web/icons/social-icons.svg', 24)
            .iconSet('toggle', 'bundles/web/icons/toggle-icons.svg', 24);

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/auth/login/");
    });
