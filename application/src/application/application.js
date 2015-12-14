(function (angular) {
    'use strict';

    angular
        .module('application', [

            /* vendors */
            'angular-loading-bar',
            'pascalprecht.translate',

            'ui.router',

            'ui.bootstrap',

            'ngResource'

        ])
        .config(config);

    function config(
        $stateProvider,
        $locationProvider,
        $translateProvider
    ) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('application', {
                url: '/',
                templateUrl: 'application/application.html'
            });

        $translateProvider.useStaticFilesLoader({
            prefix: '/translates/',
            suffix: '.json'
        });

        $translateProvider.useSanitizeValueStrategy(null);

        $translateProvider.preferredLanguage('ru-RU');

    }


})(angular);
