// reference http://codepen.io/lizz/pen/xycqe?editors=101

/*

angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope) {

  $scope.devList = [
    { text: "HTML5", checked: true },
    { text: "CSS3", checked: false },
    { text: "JavaScript", checked: false }
  ];
  
  $scope.AllSelectedItems = false;
  $scope.NoSelectedItems = false;
  
});


<html ng-app="ionicApp">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    
    <title>Checkboxes</title>

    <link href="//code.ionicframework.com/1.0.0-beta.12/css/ionic.css" rel="stylesheet">
    <script src="//code.ionicframework.com/1.0.0-beta.12/js/ionic.bundle.js"></script>
  </head>

  <body ng-controller="MainCtrl">
    
    
    <ion-header-bar class="bar-positive">
      <h1 class="title">Checkboxes</h1>
    </ion-header-bar>
             
    <ion-content>
      
      <p>All selected : {{AllSelectedItems}}</p>
        <p>None selected : {{NoSelectedItems}}</p>
      
      
      <select-all-checkbox checkboxes="devList" all-selected="AllSelectedItems"
        all-clear="NoSelectedItems"></select-all-checkbox> Select all
        
          <ion-checkbox class="checkbox-royal" ng-repeat="item in devList"
                      ng-model="item.isSelected" 
                      ng-checked="item.isSelected">
          {{ item.text }}
        </ion-checkbox>
        */

angular.module('ionicApp').directive('selectAllCheckbox', function () {
    return {
        replace: true,
        restrict: 'E',
        scope: {
            checkboxes: '=',
            allselected: '=allSelected',
            allclear: '=allClear'
        },
        template: '<input type="checkbox" ng-model="master" ng-change="masterChange()">',
        controller: function ($scope, $element) {

            $scope.masterChange = function () {
                if ($scope.master) {
                    angular.forEach($scope.checkboxes, function (cb, index) {
                        cb.isSelected = true;
                    });
                } else {
                    angular.forEach($scope.checkboxes, function (cb, index) {
                        cb.isSelected = false;
                    });
                }
            };

            $scope.$watch('checkboxes', function () {
                var allSet = true,
                    allClear = true;
                angular.forEach($scope.checkboxes, function (cb, index) {
                    if (cb.isSelected) {
                        allClear = false;
                    } else {
                        allSet = false;
                    }
                });

                if ($scope.allselected !== undefined) {
                    $scope.allselected = allSet;
                }
                if ($scope.allclear !== undefined) {
                    $scope.allclear = allClear;
                }

                $element.prop('indeterminate', false);
                if (allSet) {
                    $scope.master = true;
                } else if (allClear) {
                    $scope.master = false;
                } else {
                    $scope.master = false;
                    $element.prop('indeterminate', true);
                }

            }, true);
        }
    };
});