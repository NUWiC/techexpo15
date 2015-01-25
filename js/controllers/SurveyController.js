
// -------------------------------------------------------------
//
// Feedback Survey
//
app.controller('SurveyCtrl', function($scope) {
  $scope.showForm = true;
  /*
$scope.convenientLocation.checked = "N/A";
$scope.convenientTime.checked = "N/A";
$scope.convenientDay.checked = "N/A";
*/
/*
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  */
  
  $scope.survey_majors = [
  { text: "Undecided", value: 'Und'},
  { text: "Applied Math", value: 'AM'},
  { text: "Biomedical Engineering", value: 'BME'},
  { text: "Chemical Engineering", value: 'CHEM'},
  { text: "Civil Engineering", value: 'CIV'},
  { text: "Computer Engineering", value: 'CE'},
  { text: "Computer Science (McCormick)", value: 'CS-BS'},
  { text: "Computer Science (Weinberg)", value: 'CS-BA'},
  { text: "Electrical Engineering", value: 'EE'},
  { text: "MaDE", value: 'MADE'},
  { text: "Material Science &amp; Engineering", value: 'MSE'},
  { text: "Mechanical Engineering", value: 'MECH'},
  { text: "Non-Engineering", value: 'NON'},
  { text: "Not specified", value: 'NA'},
  ];

        /*<!--
      <option>Economics</option>
      <option>ISP</option>
      <option>MMM</option>
      <option>MSIT</option>
      <option>MPDD</option>
      <option>MSIA</option>
      -->*/

  $scope.response = {}; // $scope.attendee = {};
  $scope.submit = function() {
    
    // if you want to force any fields to be mandatory indicate them here
    /*if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }*/
    $scope.showForm = false;
    $scope.responses.push($scope.response); //$scope.attendees.push($scope.attendee);
  };
  
});
