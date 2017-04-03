(function () {
  'use strict';

  angular
  .module('SampleApp')
  .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('reg',{
      url:'/Register',
      templateUrl:'modules/Sample/Client/Views/register.html',
      data: {roles:['admin']},
      controller:'TestControl'
    })
    .state('LandingPage',{
      url:'/UserDetails',
      templateUrl:'modules/Sample/Client/Views/landingpage.html',
      params: {
       obj: null
     },
     data: {roles:['admin']},
     controller:'LandingPageControl'
   });
    
  }
}());
