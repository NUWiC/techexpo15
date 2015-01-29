// Define a new module for our app. 
// The array holds the names of dependencies if any.
//angular.module('idayIonic.filters', [])
//'idayFilters'   //'idayIonic.idayFilters'


//http://stackoverflow.com/questions/15266671/angular-ng-repeat-in-reverse

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});


// From phonecat angularJS tutorial
app.filter('checkmark', function() {
  return function(input) {
    // check unicode symbol if true, x unicode symbol if false
    return input ? '\u2713' : '\u2718';
  };
});


// http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

// All filters must return a function.
// Param 1: the data to be filtered, 
// Param 2: an argument that may be passed with a colon
// (searchFor:searchString)
app.filter('instantNameSearch', function(){

	return function(list, query){ //searchString --> query

		if(!query){ return list; }
		var result = [];
		query = query.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(list, function(item){
		
    // NOTE: Only searches the name, not the description!!
    // make sure to change the property
    // of what you're searching here....
      if(item.name.toLowerCase().indexOf(query) !== -1)
      {
				result.push(item);
      }
		});

		return result;
	};

});


app.filter('industryFilter', function(){

  return function(list, query){ //searchString --> query

    if(!query){ return list; }
    var result = [];
    query = query.toLowerCase();

    // Using the forEach helper method to loop through the array
    angular.forEach(list, function(item){
    
    // NOTE: Only searches the specific property
    // make sure to change the property
    // of what you're searching here....
    // cso_industry specialties
      if(item.industry.toLowerCase().indexOf(query) !== -1 || item.cso_industry.toLowerCase().indexOf(query) !== -1)
      {
        result.push(item);
      }
    });

    return result;
  };

});


//
// This directive enables images to load
// in the angular-generated svg
//
app.directive('ngXlinkHref', function () {
  return {
    priority: 99,
    restrict: 'A',
    link: function (scope, element, attr) {
      var attrName = 'xlink:href';
      attr.$observe('ngXlinkHref', function (value) {
        if (!value) return;
        attr.$set(attrName, value);
      });
    }
  };
});


/*
// http://jsfiddle.net/mrajcok/5ttQA/
app.directive('ngIf', function() {
    return {
        link: function(scope, element, attrs) {
            if(scope.$eval(attrs.ngIf)) {
                // remove '<div ng-if...></div>'
                element.replaceWith(element.children())
            }
            else {  element.replaceWith('');  }
        }
    }
});*/




