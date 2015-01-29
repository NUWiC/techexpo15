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



angular.module('ionicApp').directive('headerShrink', function($document) {
  var fadeAmt;

  var shrink = function(header, content, amt, max) {
    amt = Math.min(44, amt);
    fadeAmt = 1 - amt / 44;
    ionic.requestAnimationFrame(function() {
      header.style[ionic.CSS.TRANSFORM] = 'translate3d(0, -' + amt + 'px, 0)';
      for(var i = 0, j = header.children.length; i < j; i++) {
        header.children[i].style.opacity = fadeAmt;
      }
    });
  };

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      var starty = $scope.$eval($attr.headerShrink) || 0;
      var shrinkAmt;
      
      var header = $document[0].body.querySelector('.bar-header');
      var headerHeight = header.offsetHeight;
      
      $element.bind('scroll', function(e) {
        var scrollTop = null;
        if(e.detail){
          scrollTop = e.detail.scrollTop;
        }else if(e.target){
          scrollTop = e.target.scrollTop;
        }
        if(scrollTop > starty){
          // Start shrinking
          shrinkAmt = headerHeight - Math.max(0, (starty + headerHeight) - scrollTop);
          shrink(header, $element[0], shrinkAmt, headerHeight);
        } else {
          shrink(header, $element[0], 0, headerHeight);
        }
      });
    }
  }
});