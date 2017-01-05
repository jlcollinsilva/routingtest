namespace MyApp {

    angular.module('MyApp', ['ui.router']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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
}
