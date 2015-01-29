// http://stackoverflow.com/questions/16933711/how-to-load-csv-file-to-object-in-angualrjs
/*    myModule.factory('Items', ['$http', function($http){
  var Url   = "src/utils/some.csv";
  var Items = $http.get(Url).then(function(response){
     return csvParser(response.data);
  });
  return Items;
}]);
*/


// http://www.webdeveasy.com/angularjs-data-model/
/* Use this function in order to get instances of all the books */
/*        loadAllBooks: function() {
            var deferred = $q.defer();
            var scope = this;
            $http.get('ourserver/books')
                .success(function(booksArray) {
                    var books = [];
                    booksArray.forEach(function(bookData) {
                        var book = scope._retrieveInstance(bookData.id, bookData);
                        books.push(book);
                    });

                    deferred.resolve(books);
                })
                .error(function() {
                    deferred.reject();
                });
            return deferred.promise;
        },


function AppController ($scope, $rootScope, $http) {
$http.get('data/week9grid.json').success(function(data) {
    $rootScope.all_companies = data;
    console.log('data loaded');
  });

// http://stackoverflow.com/questions/16933711/how-to-load-csv-file-to-object-in-angualrjs
    app.factory('Majors', ['$http', function($http){
      var csvFilePath = "../data/csv/majors-list.csv";
      var majors_list = $http.get(csvFilePath).then(function(response){
     return csvParser(response.data);
  });
  return majors_list;
}]);  

// https://github.com/lizzb/399/blob/gh-pages/app/js/controllers.js
*/
/*

// http://andru.co/building-a-simple-single-page-application-using-angularjs#json
// We should only load the JSON file once, 
// cache it to a variable 
//and access the variable when we need the data. 
// Let's use Angular's $http service to grab the JSON file. 
// To use the $http service we will need to pass it as an argument to the AppController.
function AppController ($scope, $rootScope, $http) {
  // Load pages on startup
  //$http.get('/pages.json').success(function (data) {
  $http.get('data/week9grid.json').success(function(data) {
    //$rootScope.pages = data;
    $rootScope.all_companies = data;
    console.log('data loaded');
    $rootScope.filteredList = data; //filtered_companies = data;
    // We are also passing in $rootScope which all scopes inherit from.
    // We do this so this so that we can access the pages JSON data in our RouteController. 
  });
*/
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
$http.get('data/week9grid.json').success(function(data) {
  // do something with data
    $rootScope.all_companies = data;
    console.log('data loaded');
  });


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
var csvFilePath = "../data/csv/majors-list.csv";
var deferred = $q.defer();
 $http.get(csvFilePath).success(function(data) {
  dfd.resolve(data);
          data.forEach(function(itemData) {
              var item = this._retrieveInstance(itemData.id, itemData);
              items.push(item);
          });
 }*/


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

// var csvFilePath = "../data/csv/majors-list.csv";
/*
    getMajors: function() { 
      //console.log(this.majors);
      //return this.majors; 
      var csvArray = [];
      var majors_list = [];
      //console.log(majors_list);
      
      $http.get('js/test-majors-list.csv').success(function(data)
      {
        //console.log("data:", data);
        
        //console.log('majors csv loaded');
        
        csvArray = CSVToArray(data);
        console.log("csvArray", csvArray);
// http://techslides.com/convert-csv-to-json-in-javascript
        //console.log("majors list array: ", csvArray);
        var headers = csvArray[0];
        //var header1 = majors_list[0][0];
        //var header2 = majors_list[0][1];

        for(var i=1;i<csvArray.length;i++){
          var obj = {};
          //var currentline=lines[i].split(",");
          for(var j=0;j<headers.length;j++){
            obj[headers[j]] = csvArray[i][j];
          }
        majors_list.push(obj);
        //console.log(obj);
      }
      console.log(JSON.stringify(majors_list));
      console.log(majors_list);
        //return JSON.stringify(majors_list);
        return majors_list;
      });
    },
*/


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
    
    // Booth information includes:
    // id - int - the unique booth number used to identify this booth and link it to a company
    // bNum, label - int - the label to display on the booth before a company is assigned
    // I'm just going to use the id number, and unlike tech expo, each room will NOT start counting booths at 1
    // itll be like iday, where the counting continues across rooms
    // room - string - the name of the room this booth is in (user-friendly format)
    // floor - int - the name of the floor this booth is on (user-friendly format)
    // x - int - top-left x coordinate on the svg map
    // y - int - top-left y coordinate on the svg map
    // rotate - int - degrees to rotate the booth 
    // compId - string - the abbreviated name and unique identifier of a company
    
    

    // feed in a unique identifier that will not change
    // in my data i'm using empId (the cso id number)
    // to link btw tables
    // janky databases basically
    //getLinkedInInfo: function(companyId) {
      /*var result = null;
      this.companies.forEach(function(company) {
        if (company.id === companyId) dfd.resolve(company);
      });

      return result;*/

      // assumes one will match

      //this.linkedinData.forEach(function(company) {
      //  for (var i = 0; i < this.linkedinData.length; i++)
      //  {
      //    if(linkedinData[i]["empId"] == companyId )
      //    {
      //    
      //    } 
      //  }

    //},
    
    //
    //
    // setCompanyBoothInfo accomplished by getting companies
    // which should happen just once
    //
    //
   // setCompanyBoothInfo: function() {
      // companies:
      // contains information about the companies
      // and who/what they are recruiting at this particular career fair
      // booths:
      // contains information about both the booths "real life location" (room, floor)
      // as well as their svg map location (coordinates, rotation)
      // assumption that booth - company mapping is exactly 1:1
      // ideally no empty booths, and each company has only one booth
      // empty booths are more likely though (cancellations)
      
      // so iterate through all booths and find the matching company for each (if any) -----
      
      // then copy the info the company details page would care about that is booth-specific
      // assign from the booth info
      // eg. link to booth on map, room, floor user-friendly data
      // company doesnt care about x, y, coordinates on the map,
      // ..... or whether it is active(matche params, display diff on map?)
      
      
      
    //},

    //
    // Links all company information/properties
    // and returns the FULL list of companies
    // should only be called once
    //
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

/*
{"empId":1551,
"cso_organizationName":"3Red",
"cso_branch":"",
"cso_website":"http://3redgroup.com",
"cso_industry":"Financial Services",
"cso_orgType":"Private",
"cso_city":"Chicago",
"cso_state":"IL",
"cso_zip":60605,
"cso_country":"USA",
"cso_profile":"3Red is a proprietary trading firm with offices in the Chicago Loop and New York City.",
"cso_onlineapp":""},
*/
    
        
        // link the relevant information from the CSO mccormickconnect data
        // to each company object
        var k = 0;
        for (k = 0; k < this.csoData.length; k++)
        {
          //  CHECK FOR CAPS OF EMPID PROPS
          //csoData[k]["empId"] 
          if(this.csoData[k].empID == this.companies[i].empID )
          {
            // name = organizationname
              this.companies[i].nameCSO = this.csoData[k].cso_organizationName; 

              this.companies[i].websiteCSO = this.csoData[k].cso_website; //website;
              // ...............
              this.companies[i].website = this.csoData[k].cso_website; //website;

              this.companies[i].typeCSO =this.csoData[k].cso_orgType;
              this.companies[i]["type"] =this.csoData[k].cso_orgType;

              this.companies[i].industryCSO = this.csoData[k].cso_industry; 
              this.companies[i].industry = this.csoData[k].cso_industry; //industry;

              // .... this.companies[i].majorsCSO = this.csoData[k].majors; // typical majors
              
              
              // facebook // twitter // linkedin
              //this.companies[i].facebook = this.csoData[k].facebook;
              //this.companies[i].twitter = this.csoData[k].twitter;
              //this.companies[i].linkedin = this.csoData[k].linkedin;
              


              this.companies[i].branch = this.csoData[k].cso_branch; // branch
              //this.companies[i]["type"] =this.csoData[k].cso_orgType;  //this.csoData[k]["type"]; 
              // address1 // ,address2: // country
              this.companies[i].city = this.csoData[k].cso_city;
              this.companies[i].state = this.csoData[k].cso_state;  
              this.companies[i].zip = this.csoData[k].cso_zip;  
              this.companies[i].country = this.csoData[k].cso_country;
              // phone  // fax
              // had to rename, description property belongs to the official SWE provided one
              this.companies[i].descriptionCSO = this.csoData[k].cso_profile;  //profile;
              this.companies[i].onlineApp = this.csoData[k].cso_onlineapp; // onlineApp
              break;
          } 
        }

/*
"linkedinID":"3red-trading",
"name_lnkd":"3Red Trading",
"industry_lnkd":"Financial Services",
"type_lnkd":"Privately Held",
"size_lnkd":"11-50 employees",
"founded_lnkd":"2011",
"website_lnkd":"http://www.3redgroup.com/",
"hqcity_lnkd":"Chicago",
"hqstate_lnkd":"IL",
"hqzip_lnkd":"60605",
"hqcountry_lnkd":"United States",
"specialties_lnkd":"",
"description_lnkd":"3
*/
        // link the relevant information from the linkedIn data
        // to each company object
        for (k = 0; k < this.linkedinData.length; k++)
        {
          
          //if(this.linkedinData[k].empId == this.companies[i].empId )

          // use the linkedinID to find the linkedin info
          if(this.linkedinData[k].linkedinID == this.companies[i].linkedinID)
          {
            this.companies[i].nameLNKD = this.linkedinData[k].name_lnkd;
            // name = companyName
            //this.companies[i].linkedinID = this.linkedinData[k].linkedinID;
            this.companies[i].industryLNKD = this.linkedinData[k].industry_lnkd;//industry;
            this.companies[i].typeLNKD = this.linkedinData[k].type_lnkd;//type;

            this.companies[i].specialties = this.linkedinData[k].specialties_lnkd; //specialties;
            this.companies[i]["size"] = this.linkedinData[k].size_lnkd; //companySize;
            this.companies[i].founded = this.linkedinData[k].founded_lnkd; //founded;

            this.companies[i].hqCity = this.linkedinData[k].hqcity_lnkd;
            this.companies[i].hqState = this.linkedinData[k].hqstate_lnkd;
            this.companies[i].hqZip = this.linkedinData[k].hqzip_lnkd;
            this.companies[i].hqCountry = this.linkedinData[k].hqcountry_lnkd;
            this.companies[i].descriptionLNKD = this.linkedinData[k].description_lnkd; //description2 blurb;
            this.companies[i].websiteLNKD = this.linkedinData[k].website_lnkd; // companyWebsite website


           
            //this.companies[i].industry = this.companies[i].industryCSO;
            if (this.companies[i].industry == "")
              this.companies[i].industry = this.companies[i].industryLNKD;


            //this.companies[i].name = this.companies[i].nameLNKD;
            this.companies[i].type = this.companies[i].typeLNKD;
            //this.companies[i].industry = this.companies[i].industryLNKD;
            //this.companies[i].description = this.companies[i].descriptionLNKD;
            this.companies[i].website = this.companies[i].websiteLNKD;


            
            // or ["Source Page URL"];
            //this.companies[i].linkedin = "http://www.linkedin.com/company/" + this.companies[i].linkedinID;
           /*  type  founded  hqAddress  Source Page url  hqCountry  */
              break;
          } 
        }

/*
FINAL PROPERTIES OF COMPANY AT END OF THIS FX
company.*
name
type
website
description
website

nameCSO
nameLNKD
websiteCSO
websiteLNKD
industryCSO
industryLNKD
typeCSO
typeLNKD
descriptionCSO
descriptionLNKD


onlineApp

name --> CSO AND LinkedIn
industry --> CSO AND LinkedIn
type --> CSO AND LinkedIn
website --> CSO AND LinkedIn
description --> CSO AND LinkedIn

booth
room
floor

industryLNKD
industryCSO
typeLNKD
typeCSO
websiteLNKD
websiteCSO

branch
city
state
zip

specialties
size
founded
hqCity
hqState
hqZip
hqCountry
*/
        


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























    //  this.companies.forEach(function(company) {
    //    for (var i = 0; i < this.booths.length; i++) {
    //      if(company.booth === booths[i].bNum) {
    //      }  }





        


/*

        // ----------------------------------------------------------
        //
        //
        
        
        // link the relevant information from the CSO mccormickconnect data
        // to each company object
        var k = 0;
        for (k = 0; k < this.csoData.length; k++)
        {
          //csoData[k]["empId"] 
          if(this.csoData[k].empId == this.companies[i].empId )
          {
              // Excluding these fields:
              // organization name
              // phone, fax, address1, address2, country
              // facebook, twitter, linkedin

              // name = organizationname
              // this.companies[i].csoOrganizationName = this.csoData[k].cso_organizationName;
              
              this.companies[i].branch = this.csoData[k].cso_branch;
              this.companies[i].industryCSO = this.csoData[k].cso_industry;
              this.companies[i].websiteCSO = this.csoData[k].cso_website;

              // Linkedin organization type is more reputable
              // but not all companies have a LinkedIn page
              this.companies[i].typeCSO = this.csoData[k].cso_orgType;
              //this.companies[i]["type"] = this.csoData[k]["type"];
                // csoOrgType cso_orgType 
              
              // I found errors in these 3 fields in McCormickConnect info
              // (facebook / twitter / linkedin)
              // also many companies do not fill them out
              //
              //this.companies[i].facebook = this.csoData[k].facebook;
              //this.companies[i].twitter = this.csoData[k].twitter;
              //this.companies[i].linkedin = this.csoData[k].linkedin;

              // onlineApp is also rarely filled out, but will include anyway
              this.companies[i].onlineApp = this.csoData[k].cso_onlineapp;


              this.companies[i].city = this.csoData[k].cso_city;
              this.companies[i].state = this.csoData[k].cso_state;
              this.companies[i].zip = this.csoData[k].cso_zip;

              // description --> csoProfile
              this.companies[i].profileCSO = this.csoData[k].cso_profile;
              
              break;
          } 
        }

        // link the relevant information from the linkedIn data
        // to each company object
        for (k = 0; k < this.linkedinData.length; k++)
        {
          
          if(this.linkedinData[k].empId == this.companies[i].empId )
          {

            // name = companyName
            this.companies[i].linkedinID = this.linkedinData[k].linkedinID;
            this.companies[i].linkedinIndustry = this.linkedinData[k].industry;
            this.companies[i].specialties = this.linkedinData[k].specialties;
            this.companies[i]["size"] = this.linkedinData[k].companySize;
            this.companies[i].companyType = this.linkedinData[k].type;
            this.companies[i].founded = this.linkedinData[k].founded;

            this.companies[i].hqCity = this.linkedinData[k].hqCity;
            this.companies[i].hqState = this.linkedinData[k].hqState;
            this.companies[i].hqZip = this.linkedinData[k].hqZip;
            // description2-blurb
            // blurb-->linkedinProfile...linkedinProfie... linkedinDescription
            // descriptionLin
            // description2 --> description
            this.companies[i].description2 = this.linkedinData[k].blurb;
            this.companies[i].companyWebsite = this.linkedinData[k].website;

            // or ["Source Page URL"];
            this.companies[i].linkedin = "http://www.linkedin.com/company/" + this.companies[i].linkedinID;
           // type  founded  hqAddress  Source Page url  hqCountry  
              break;
          } 
        }

        // Choose most reputable properties to display
        // template for company-details referneces these properties:
        // company. ...
        // name, starred, booth, room, (majors), (positions),
        // website
        // description, specialties, size,
        // type or companyType
        // city, state, zip
        // hqCity, hqState, hqZip

        // facebook, twitter, linkedinID, empID

        // blurbLinkedin.... profileL
        // industryLinkedin profileLin descLin

        //company.description;
        //company.type;

        //
        // description
        //
        this.companies[i].description = this.companies[i].profileCSO;
        if(this.companies[i].profileLIN != null)
          this.companies[i].description = this.companies[i].profileLIN;

        //
        // industry
        //
        this.companies[i].industry = this.companies[i].industryCSO;
        if(this.companies[i].industryLIN != null)
          this.companies[i].industry = this.companies[i].industryLIN;

        //
        // company type
        //
        this.companies[i].orgType = this.companies[i].typeCSO;
        if(this.companies[i].typeLIN != null)
          this.companies[i].orgType = this.companies[i].typeLIN;

        //
        // website
        //
        this.companies[i].website = this.companies[i].websiteCSO;
        //if(companies[i].profileLIN != null)
        //  this.companies[i].description = this.companies[i].profileLIN;



        


      }
      
      return this.companies;
    },

    */




/*
//{"empId":51,"linkedinID":1864,"Source Page URL":"https://www.linkedin.com/company/3m",
//"companyName":"3M","industry":"Mechanical or Industrial Engineering",
//"specialties":"Innovation, Collaboration, Global, Diverse Career Opportunities",
//"companySize":"10,001+ employees","type":"Public Company","founded":1902,
//"hqAddress":"","hqCity":"","hqState":"","hqZip":null,"hqCountry":"",
//"blurb":"Over the years, our innovations have improved daily life for hundreds of millions of people all over the world. We have made driving at night easier, made buildings safer, and made consumer electronics lighter, less energy-intensive and less harmful to the environment. We even helped put a man on the moon. 3M is an incredible place.",
//"website":"http://www.3M.com/careers"},

//{"empId":51,"organizationName":"3M","branch":"Film Manufacturing",
//"website":"http://www.mmm.com",
//"facebook":"https://www.facebook.com/3MCareers","twitter":null,"linkedin":"",
//"industry":"Manufacturing","type":"Public",
//"address1":"3M Film Manufacturing & Supply Chain Operations",
//"address2":"3M Center, Building 0220-12N-05",
//"city":"St. Paul","state":"MN","zip":55144-1000,"country":"USA",
//"phone":"(651) 737-4259","fax":"651. 733.1570",
//"profile":"Diversified Manufacturing",
//"onlineApp":"","inDirectory":"TRUE",
//"Majors":"ChE - Chemical Engineering EE - Electrical Engineering IE - Industrial Engineering MaDE - Manufacturing and Design Engineering ME - Mechanical Engineering MatSE - Materials Science and Engineering"},

//branch,website,facebook:,twitter:,linkedin:"",industry:,type:,address1:address2:,city:"St. Paul",state:"MN",zip:,Country:,phone:,fax:,profile==description,onlineApp:""},
*/



    // Company grid contains:
    // id - string - the company id used in urls, and for referencing the company
    // name - string - the organization name to display
    // starred - boolean - whether or not this company has been flagged/starred as a favorite
    // booth - int - the unique booth number for this company
    // industry
    // description
    // majors
    // positions
    // citizenship
    //companies, //company_grid,