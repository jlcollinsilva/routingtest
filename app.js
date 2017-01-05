var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router']).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('Page1', {
            url: '/',
            templateUrl: "ngApp/page1.html",
            controller: MyApp.Controllers.Page1Controller
        })
            .state('Page2', {
            url: '/page2',
            templateUrl: "ngApp/page2.html",
            controller: MyApp.Controllers.Page2Controller,
            controllerAs: 'controller'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
