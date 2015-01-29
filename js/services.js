app.service('CareerFairService', ['$http','$q', function($http, $q) {
  
  return {

    // these variables come from separate js files in data folder
    companies: company_list, 
    booths: booth_info,
    majors: majors_list,
    positions: positions_list,
    linkedinData: company_list_linkedinData,
    csoData: company_list_csoData,

    getMajors: function() { return this.majors; },

    // getBoothLayout
    getBooths: function() { return this.booths; },


    getPositions: function() { return this.positions; },
    
    getBooth: function(boothNumber) {
      var dfd = $q.defer();
      this.booths.forEach(function(booth) {
        if (booth.bNum === boothNumber) dfd.resolve(booth);
      });

      return dfd.promise;
    },

    getCompany: function(companyId) {
      var dfd = $q.defer();
      this.companies.forEach(function(company) {
        if (company.id === companyId) dfd.resolve(company);
      });

      return dfd.promise;
    },
    
    /*
    getCompanyList: function($http) {
      $http.get('data/company-grid.json').success(function(data) {
      this.companies = data;
      console.log('company grid loaded');
    });
  },*/

  

    

// setCompanyBoothInfo accomplished by getting companies
// which should happen just once
    //
    // Links all company information/properties
    // and returns the FULL list of companies
    // should only be called once
        getCompanies: function() {
      
          // loop through each company only once
          // still has bad runtime cuz gonna loop through 3 more
          // arrays of same length
          // but its a small data set
      for (var i = 0; i < this.companies.length; i++) {
        
        
        for (var j = 0; j < this.booths.length; j++) {
          
          if(this.companies[i].booth == this.booths[j].bNum)
          {
            // Make relevant information from the booths
            // a property of the corresponding company
            // (details to display to user, e.g. room name)
            this.companies[i].room = this.booths[j].room;
            this.companies[i].floor = this.booths[j].floor;
            
            // Also assign relevant properties of company to booth
            // e.g. its id to link to company details page
            this.booths[j].compId = this.companies[i].id;
            this.booths[j].id = "booth" + this.booths[j].bNum;
            
            // Stop looping through booths if you found match already
            break; 
          }
        }


// empID 
// cso_name  cso_branch_opt  cso_website cso_industry  cso_type
// cso_city  cso_state cso_zip cso_country 
// cso_description   
// linkedinID  lnkd_name lnkd_description  lnkd_specialties  lnkd_website  
// lnkd_industry lnkd_type lnkd_size 
// lnkd_hqcity lnkd_hqstate  lnkd_hqzip  lnkd_hqcountry  lnkd_founded



        
        // link the relevant information
        // from the CSO mccormickconnect data
        // to each company object
        var k = 0;
        for (k = 0; k < this.csoData.length; k++)
        {
          if(this.csoData[k].empID == this.companies[i].empID )
          {
              this.companies[i].nameCSO = this.csoData[k].cso_name;
              
              this.companies[i].websiteCSO = this.csoData[k].cso_website;
              this.companies[i].industryCSO = this.csoData[k].cso_industry;
              this.companies[i].typeCSO =this.csoData[k].cso_type;
              this.companies[i].city = this.csoData[k].cso_city;
              this.companies[i].state = this.csoData[k].cso_state;  
              this.companies[i].zip = this.csoData[k].cso_zip;  
              this.companies[i].country = this.csoData[k].cso_country;
              this.companies[i].descriptionCSO = this.csoData[k].cso_description;

              this.companies[i].branch = this.csoData[k].cso_branch_opt;
              
              this.companies[i]["type"] = this.companies[i].typeCSO;
              this.companies[i].website = this.companies[i].websiteCSO;
              this.companies[i].industry = this.companies[i].industryCSO;
              this.companies[i]["description"] = this.companies[i].descriptionCSO;

              break;
          } 
        }

        // link the relevant information
        // from the linkedIn data
        // to each company object
        for (k = 0; k < this.linkedinData.length; k++)
        {
          

// linkedinID  lnkd_name lnkd_description  lnkd_specialties  lnkd_website  
// lnkd_industry lnkd_type lnkd_size 
// lnkd_hqcity lnkd_hqstate  lnkd_hqzip  lnkd_hqcountry  lnkd_founded


          // use the linkedinID to find the linkedin info
          if(this.linkedinData[k].linkedinID == this.companies[i].linkedinID)
          {
            this.companies[i].nameLNKD = this.linkedinData[k].lnkd_name;
            this.companies[i].descriptionLNKD = this.linkedinData[k].lnkd_description;

            this.companies[i].websiteLNKD = this.linkedinData[k].lnkd_website;
            this.companies[i].industryLNKD = this.linkedinData[k].lnkd_industry;
            this.companies[i].typeLNKD = this.linkedinData[k].lnkd_type;

            this.companies[i].specialties = this.linkedinData[k].lnkd_specialties;
            this.companies[i]["size"] = this.linkedinData[k].lnkd_size; 
            this.companies[i].founded = this.linkedinData[k].lnkd_founded;

            this.companies[i].hqCity = this.linkedinData[k].lnkd_hqcity;
            this.companies[i].hqState = this.linkedinData[k].lnkd_hqstate;
            this.companies[i].hqZip = this.linkedinData[k].lnkd_hqzip;
            this.companies[i].hqCountry = this.linkedinData[k].lnkd_hqcountry;
           


            /*
            //this.companies[i].industry = this.companies[i].industryCSO;
            if (this.companies[i].industry == "")
              this.companies[i].industry = this.companies[i].industryLNKD;


            //this.companies[i].name = this.companies[i].nameLNKD;
            this.companies[i].type = this.companies[i].typeLNKD;
            //this.companies[i].industry = this.companies[i].industryLNKD;
            //this.companies[i].description = this.companies[i].descriptionLNKD;
            this.companies[i].website = this.companies[i].websiteLNKD;
            */

              //this.companies[i]["type"] = this.csoData[k].typeCSO;
              //this.companies[i].website = this.csoData[k].websiteCSO;
              //this.companies[i].industry = this.companies[i].industryCSO;
              //this.companies[i]["description"] = this.companies[i].descriptionCSO;

              this.companies[i]["type"] = this.companies[i].typeLNKD;
              this.companies[i].industry = this.companies[i].industryLNKD;
           
              break;
          } 
        }

      }
      
      return this.companies;

    },
    
    

    getCompanyByBooth: function(boothNum) {
      var dfd = $q.defer();
      this.companies.forEach(function(company) {
        if (company.booth === boothNum) dfd.resolve(company);
      });

      return dfd.promise;
    },

    /* this doesnt work bleh */
     getNextCompany: function(currCompanyId) {
      var currCompany = getCompany(currCompanyId);

      var currCompanyBooth = currCompany.booth;
      //STABILIZE LATER
      // this is not a gaurunteed function!
      // assumes that highest booth value will have the last company
      var nextCompanyBooth = (currCompanyBooth+1)%companies.length;

      //var nextCompany = ;
      // i dont actually know what this does
      //var dfd = $q.defer();
      // this is janky and doesnt promise an order but im tired of switchign views back and forth to peruse companies
      for(var i = 0; i<this.booths.length; i++)
      {
        if(booths[i].bNum == nextCompanyBooth) return getCompany(booths[i].compId);
      }
      //this.companies.forEach(function(company) {
      //  if (company.id === companyId) dfd.resolve(company);
      //});

      // fi for some reason there wasn't a next...
      return currCompany;
      //return dfd.promise;
    }
  }
}]);














/*

function AppController ($scope, $rootScope, $http) {
$http.get('data/week9grid.json').success(function(data) {
    $rootScope.all_companies = data;
    console.log('data loaded');
  });
// https://github.com/lizzb/399/blob/gh-pages/app/js/controllers.js
*/
/*

// http://andru.co/building-a-simple-single-page-application-using-angularjs#json

/* ****
app.factory('Majors', ['$http', function($http){
      var csvFilePath = "../data/csv/majors-list.csv";
      var majors_list = $http.get(csvFilePath).then(function(response){
     return csvParser(response.data);
  });
  return majors_list;
}]);  

*/

/*

majors: function() {
 // var csvFilePath = "../data/csv/majors-list.csv";
  var dfd = $q.defer(); // var deferred = $q.defer();
  $http.get("test-majors-list.csv").success(function(data) { //(itemsArray) {
          var items = [];
          data.forEach(function(itemData) {
              var item = this._retrieveInstance(itemData.id, itemData);
              items.push(item);
          });

          dfd.resolve(items); //deferred.resolve(items);
      })
     // .error(function() { dfd.reject(); });
  return dfd.promise; //return deferred.promise;
},
*/
/*
// Notice that bookData is still a JSON object. 
$http.get('ourserver/books/' + bookId).success(function(bookData) {
        $scope.book = bookData;
    });
}]);

*/
      







        


/*

        // ----------------------------------------------------------
        //
        //
        
        
        // link the relevant information from the CSO mccormickconnect data
        // to each company object
        

        // link the relevant information from the linkedIn data
        // to each company object
       

        // Choose most reputable properties to display
        // template for company-details referneces these properties:

        */
       