// need to use a factory or something, loading this takes sooo sloowwlyy
// -------------------------------------------------------------
// http://codepen.io/lizz/pen/nKuLm?editors=101
// Company Map / Booth Floorplan Layout
//
app.controller('CompanyMapCtrl', function($scope, $location) {
  

  $scope.go = function ( path ) { $location.path( path ); };

  $scope.rotateBooth = function (boothRotation) {
    var degrees = 0;
      if(boothRotation != null) degrees = boothRotation;
      return "rotate("+degrees+", 0, 0);";
  };  


// not currently working... bleh whatever
  $scope.rotateLabel = function (boothRotation) {
    var labelRotateDegrees = 0;
    if(boothRotation != null)
      {
        // booth is vertical with bottom facing to left
        if (boothRotation == 90)
        {
          boothRotation = -190;
        }
        // booth is vertical with bottom facing to right
        else if (boothRotation == -90)
        {

        }
        labelRotateDegrees = boothRotation;
      
    }
    return "rotate("+labelRotateDegrees+", 0, 0);";
  };  

  // these variables defined in booths.js
  $scope.bWidth = boothWidth;
  $scope.bHeight = boothHeight;
  //$scope.bWidth = 60; // boothWidth
  //$scope.bHeight = 60; // boothHeight

  //$scope.bWidth = 70; // boothWidth
  //$scope.bHeight = 20; // boothHeight
  
  $scope.roomTitle = "Industry Day 2014 Layout";  

// outline for grill room i think
//  $scope.roomOutline = "M395 1070 l-193-1 0 354 589 0 0-359 -296-1 30 40 -163-1 33-32 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0z M12 904l0-717 946-1 0 719 -179-1 13-30 -114 0 15 31 -6810 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0z";

$scope.roomOutline = "M 200,10 h1040 v900 h-855 l -72,-35 l -48,100 l -135,-75 l 65, -105 v-785 z M 250,1200 h865 v595 h-140 v25 h-120 v-25 h-605 z";

/*path class="roomOutline"  
        d="
        M 200,10
        l 1040,0
        l 0,900
        l -855,0
        l -72, -35
        l -48, 100
        l -135, -75
        l 65, -105
        l 0,-785
        z"
  */

  /*
  M 250,1200
        l 865,0
        l 0,595
        l -140,0
        l 0,25
        l-120,0
        l 0,-25
        l -605, 0
        z
        */

// these are for techexpo hilton orrington
  $scope.startX = 80;  
  $scope.startY = -200;
  $scope.mapWidth = 1250;
  $scope.mapHeight = 2100;

// tese are for iday
 /* $scope.startX = -10;
  $scope.startY = -800;
  $scope.mapWidth = 1100;
  $scope.mapHeight = 2435;
  */
 
 // values specific to THIS floorplan svg image
// i have code to calculate the size of the canvase as well
// and account for case that theres weirdly just 1 booth
// but keeping it fixed for now
 /* $scope.startX = -20;
  $scope.startY = -4;
  $scope.mapWidth = 1095 + 40; //93
  $scope.mapHeight = 1431;*/
  // add any padding HERE, not in the view!
    // {{startX - 20}} {{startY - 20}} {{mapWidth + 20}} {{mapHeight + 20}}"


});