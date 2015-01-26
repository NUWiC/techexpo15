app.service('CareerFairService', function($q) {
  
  return {
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

    // these variables come from separate js files in data folder
    companies: company_list, 
    linkedinData: company_list_linkedinData,
    csoData: company_list_csoData,
    booths: booth_info,
    majors: majors_list,
    positions: positions_list,

    // getBoothLayout
    getBooths: function() { return this.booths; },
    getMajors: function() { return this.majors; },
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
    

// {"empId":1586,
//"cso_organizationName":"Atomatic Mechanical Services",
//"cso_branch":null,"cso_industry":"Engineering",
//"cso_orgType":"Private",
//"cso_website":"http://www.atomatic.com",
//"cso_city":"Arlington Heights",
//"cso_state":"IL",
//"cso_zip":60004,
//"cso_country":"United States",
//"cso_profile":"For over 65 years Atomatic Mechanical Services has been dedicated to quality design installation and service of HVAC systems for the commercial institutional industrial and residential building markets throughout metropolitan Chicago. Our solid reputation is built on high standards innovative designs and exceptional customer service. We honor our word and commitments. Atomaticâ€™s ultimate goal is to continually meet the changing needs of our customers and exceed their expectations.","cso_onlineapp":""},

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

    
        
        // link the relevant information from the CSO mccormickconnect data
        // to each company object
        var k = 0;
        for (k = 0; k < this.csoData.length; k++)
        {
          //csoData[k]["empId"] 
          if(this.csoData[k].empId == this.companies[i].empId )
          {
            // name = organizationname
              this.companies[i].branch = this.csoData[k].cso_branch; // branch
              this.companies[i].website = this.csoData[k].cso_website; //website;
              
              // facebook // twitter // linkedin
              //this.companies[i].facebook = this.csoData[k].facebook;
              //this.companies[i].twitter = this.csoData[k].twitter;
              //this.companies[i].linkedin = this.csoData[k].linkedin;

              this.companies[i].industry = this.csoData[k].cso_industry; //industry;
              this.companies[i]["type"] =this.csoData[k].cso_orgType;  //this.csoData[k]["type"]; 
              // address1 // ,address2: // country
              this.companies[i].city = this.csoData[k].cso_city; //city;
              this.companies[i].state = this.csoData[k].cso_state;  //state;
              this.companies[i].zip = this.csoData[k].cso_zip;  //zip;
              // phone  // fax
              // had to rename, description property belongs to the official SWE provided one
              this.companies[i].descriptionCSO = this.csoData[k].cso_profile;  //profile;
              // onlineApp
              break;
          } 
        }

        // link the relevant information from the linkedIn data
        // to each company object
        for (k = 0; k < this.linkedinData.length; k++)
        {
          
          //if(this.linkedinData[k].empId == this.companies[i].empId )

          // use the linkedinID to find the linkedin info
          if(this.linkedinData[k].linkedinID == this.companies[i].linkedinID)
          {
            // name = companyName
            //this.companies[i].linkedinID = this.linkedinData[k].linkedinID;
            this.companies[i].linkedinIndustry = this.linkedinData[k].industry;
            this.companies[i].specialties = this.linkedinData[k].specialties;
            this.companies[i]["size"] = this.linkedinData[k].companySize;
            this.companies[i].companyType = this.linkedinData[k].type;
            this.companies[i].founded = this.linkedinData[k].founded;

            this.companies[i].hqCity = this.linkedinData[k].hqCity;
            this.companies[i].hqState = this.linkedinData[k].hqState;
            this.companies[i].hqZip = this.linkedinData[k].hqZip;
            this.companies[i].description2 = this.linkedinData[k].blurb;
            this.companies[i].companyWebsite = this.linkedinData[k].website;

            // or ["Source Page URL"];
            this.companies[i].linkedin = "http://www.linkedin.com/company/" + this.companies[i].linkedinID;
           /*  type  founded  hqAddress  Source Page url  hqCountry  */
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
})

    //  this.companies.forEach(function(company) {
    //    for (var i = 0; i < this.booths.length; i++) {
    //      if(company.booth === booths[i].bNum) {
    //      }  }


/*app.service('AttendeesService', function($q) {
  
  return {
    
    attendees: [
    { id: '1', firstname: 'Nicolas', lastname: 'Cage', vegetarian: false, shirtSize: 'L' },
    { id: '2', firstname: 'Jean-Claude', lastname: 'Van Damme', vegetarian: false, shirtSize: 'L' },
    { id: '3', firstname: 'Keanu', lastname: 'Reeves', vegetarian: true, shirtSize: 'S' },
    { id: '4', firstname: 'Steven', lastname: 'Seagal', vegetarian: true, shirtSize: 'M' }
  ],
    

    getAttendees: function() {
      return this.attendees;
    },
    
    getAttendee: function(attendeeId) {
      var dfd = $q.defer();
      this.attendees.forEach(function(attendee) {
        if (attendee.id === attendeeId) dfd.resolve(attendee);
      });

      return dfd.promise;
    }
  }
})*/





/* CONFUSED MYSELF

    getCompanies: function() {

      for (var i = 0; i < this.companies.length; i++) {
        
        // link the relevant information from the booths to the corresponding company
        for (var j = 0; j < this.booths.length; j++) {
          
          if(this.companies[i].booth == this.booths[j].bNum) {
            this.companies[i].room = this.booths[j].room;
            this.companies[i].floor = this.booths[j].floor;
            
            this.booths[j].compId = this.companies[i].id;
            this.booths[j].id = "booth" + this.booths[j].bNum;
            
            //this.companies[i].booth = this.booths[j].id;
            break;
          }
        }

        


/*
https://www.myinterfase.com/mccormick_northwestern/contactregistration.aspx?emp_id=

"empId":1586,
"cso_organizationName":"Atomatic Mechanical Services",
"cso_branch":null,
"cso_industry":"Engineering",
"cso_orgType":"Private",
"cso_website":"http://www.atomatic.com",
"cso_city":"Arlington Heights",
"cso_state":"IL",
"cso_zip":60004,
"cso_country":"United States",
"cso_profile":"For over 65 years Atomatic Mechanical Services has been dedicated to quality design installation and service of HVAC systems for the commercial institutional industrial and residential building markets throughout metropolitan Chicago. Our solid reputation is built on high standards innovative designs and exceptional customer service. We honor our word and commitments. Atomaticâ€™s ultimate goal is to continually meet the changing needs of our customers and exceed their expectations.",
"cso_onlineapp":""


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