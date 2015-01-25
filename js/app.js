//angular.module('idayIonic', ['ionic', 'idayIonic.controllers', 'idayIonic.services', 'idayIonic.filters'])

/* TODO - currently no specific action for this, should ideally center on booth
    // sidemenu.map.company'
    .state('sidemenu.booth', {
      url: "/map/:companyId",
      views: { 'menuContent' :{ templateUrl: "templates/map.html", controller: "CompanyMapCtrl" } }
    })
    */


var app = angular.module('ionicApp', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('sidemenu', {
      url: "/",
      abstract: true,
      templateUrl: "templates/sidemenu.html",
    })
    .state('sidemenu.home', {
      url: "home",
      views: { 'menuContent' :{ templateUrl: "templates/home.html" } }
    })

    .state('sidemenu.companies', {
      url: "companies",
      views: { 'menuContent' :{ templateUrl: "templates/company-list.html", controller: "CompanyListCtrl" } }
    })
    
    .state('sidemenu.company', {
      url: "companies/:companyId",
      resolve: { company: function($stateParams, CareerFairService) { return CareerFairService.getCompany($stateParams.companyId); },
      /*nextCompany: function($stateParams, CareerFairService) {return CareerFairService.getNextCompany($stateParams.companyId);}*/ },
      views: { 'menuContent' :{ templateUrl: "templates/company-detail.html", controller: "CompanyDetailCtrl" } }
    })
    
    .state('sidemenu.map', {
      url: "map",
      views: { 'menuContent' :{ templateUrl: "templates/map.html", controller: "CompanyMapCtrl" } }
    })
    

    .state('sidemenu.credits', {
      url: "credits",
      views: { 'menuContent' :{ templateUrl: "templates/credits.html", controller: "MainCtrl" } } /*FilterSettingsCtrl*/
    })

    .state('sidemenu.feedback', {
      url: "feedback",
      views: { 'menuContent' :{ templateUrl: "templates/survey.html", controller: "SurveyCtrl" } } /*FilterSettingsCtrl*/
    })
    
    /*
    .state('sidemenu.settings', {
      url: "/settings",
      views: { 'menuContent' :{ templateUrl: "templates/settings.html", controller: "MainCtrl" } } /*FilterSettingsCtrl
    })*/
    
    /* alternate views */
    .state('sidemenu.companies-grid', {
      url: "companies-grid",
      views: { 'menuContent' :{ templateUrl: "templates/company-list-gridinfo.html", controller: "CompanyListCtrl" } }
    })

    .state('sidemenu.companies-verbose', {
      url: "companies-verbose",
      views: { 'menuContent' :{ templateUrl: "templates/company-list-all-details.html", controller: "CompanyListCtrl" } }
    })
    /*       */


  // if none of the above states are matched, use this as the fallback
  // Fall back on this URL otherwise
  $urlRouterProvider.otherwise("companies");
});