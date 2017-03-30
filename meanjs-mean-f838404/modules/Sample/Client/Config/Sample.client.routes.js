
'use strict';

// Setting up route


angular
.module('SampleApp')
.config(SamplrouteConfig);

SamplrouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function SamplrouteConfig($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('SampleApp.login', {
    url:'/securitySettings',
    templateUrl:'modules/Sample/Client/Views/login.html',
    controller:'TestControl'
  })
  .state('RegisterUser', {
    url:'/securitySettings',
    templateUrl:'modules/Sample/Client/Views/register.html',
    data: {roles:['admin']},
    controller:'TestControl'
  });


}
