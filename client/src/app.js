(function() {
    angular.module("app", [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        // forced client routing sends to 404 for any unrecognized url
        $urlRouterProvider.otherwise('404');
        
        // declare all app states
        // TODO: add dynamic SEO
        $stateProvider
        .state('app', {
            abstract: true,
            url: '',
            templateUrl: '/views/index.html'
        })
        
        .state('app.home', {
            url: '',
            templateUrl: '/views/home/index.html'
        });
    }]);
                                      
})();