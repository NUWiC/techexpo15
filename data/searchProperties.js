// friendlyName = The name to display in the interface
// name = the csv/json-safe name for filtering etc

var majors_list = [ 
{name:"All",friendlyName:"All Majors"},
{name:"AM",friendlyName:"Applied Mathematics"},
{name:"BME",friendlyName:"Biomedical Engineering"},
{name:"ChE",friendlyName:"Chemical Engineering"},
{name:"CmpE",friendlyName:"Computer Engineering"},
{name:"CS",friendlyName:"Computer Science"},
{name:"Econ",friendlyName:"Economics"},
{name:"EE",friendlyName:"Electrical Engineering"},
{name:"EnvE",friendlyName:"Environmental Engineering"},
{name:"IE",friendlyName:"Industrial Engineering"},
{name:"MaDE",friendlyName:"Manufacturing and Design Engineering"},
{name:"MBP",friendlyName:"Masters of Biotechnology Program"},
{name:"ME",friendlyName:"Mechanical Engineering"},
{name:"MEM",friendlyName:"Masters of Engineering Management"},
{name:"MMM",friendlyName:"MSEDI + MBA"},
{name:"MPDD",friendlyName:"Masters of Product Design and Development"},
{name:"MPM",friendlyName:"Masters of Project Management"},
{name:"MatSE",friendlyName:"Materials Science and Engineering"},
{name:"MSEDI",friendlyName:"MS Engineering Design and Innovation"},
{name:"MSIT",friendlyName:"MS Information Technology"},
{name:"TAM",friendlyName:"Theoretical and Applied Mechanics"},
{name:"UND",friendlyName:"Undecided"},
{name:"CE",friendlyName:"Civil Engineering "},
{name:"ISP",friendlyName:"Integrated Science Program"},
{name:"MIES",friendlyName:"McCormick Integrated Engineering Studies"},
{name:"MSiA",friendlyName:"MS in Analytics"},
{name:"MSR",friendlyName:"Master of Science in Robotics "},
{name:"AP",friendlyName:"Applied Physics (PhD)"}
];

var positions_list = [ 
  { friendlyName: 'Full Time', name: 'fte'},
  { friendlyName: 'Intern', name: 'intern' },
  { friendlyName: 'Co-Op', name: 'coop' },
  { friendlyName: 'Research', name: 'research' },
  //{ friendlyName: 'MS', name: 'ms'},
  //{ friendlyName: 'PhD', name: 'phd'},
  //{ friendlyName: 'International', name: 'intl'}
];

var edulevel_list = [ 
  { friendlyName: 'Bachelors', name: 'bs'},
  { friendlyName: 'BS/MS', name: 'bsms'},
  { friendlyName: 'Masters', name: 'ms'},
  { friendlyName: 'MBA', name: 'mba'},
  { friendlyName: 'PhD', name: 'phd'},
];

var citizenship_list = [ 
{ friendlyName: 'Accepts International', name: 'intl'}
];

/*
AM
BME
CS
CompE
CivE
ChemE
Econ
EE
EnV
IE
MaDE
MBP
MEM
MatSci
MechE
ISP
MSR
MSIT
MSiA
TAM
MPD
MSEDI
MSIS
MPM
Phys

Bachelors
BS/MS
Masters
MBA
PhD

Full Time
Intern
Coop
Research

Accepts International
*/

/*
// Industries list from McCormick Connect / CSO /MyInterfase
var industries_list = [  
"Accounting",
"Advertising/Marketing",
"Aerospace",
"Agriculture",
"Architecture / Urban Planning",
"Arts",
"Automotive",
"Banking",
"Biotech & Pharmaceuticals",
"Business Services",
"Chemicals",
"Communications / Media",
"Computers",
"Construction",
"Consulting",
"Consumer Products",
"Distribution",
"Education",
"Electronics",
"Energy",
"Engineering",
"Entertainment",
"Entrepreneurial / Start-Ups",
"Environment",
"Fashion",
"Financial Services",
"Food Science",
"Food Services",
"Forestry",
"Government / Public Administration",
"Healthcare",
"High Tech - Information Technology",
"Hotel, Restaurant, Hospitality",
"Housing & Urban Development",
"Insurance",
"International Affairs & Development",
"Internet",
"Investment Banking",
"Law",
"Law Enforcement & Security",
"Logistics",
"Manufacturing",
"Maritime",
"Military & Defense",
"Mining",
"Museums & Libraries",
"Libraries",
"Natural Resources",
"Non-Profit / Philanthropy",
"Other",
"Parks and Camps",
"Print & Publishing",
"Publishing",
"Real Estate",
"Religion",
"Research",
"Retail / Wholesale",
"Rubbers & Plastics",
"Plastics",
"Sciences",
"Sports & Recreation",
"Recreation",
"Staffing & Executive Search",
"Telecommunications",
"Tobacco",
"Trade",
"Transportation",
"Travel & Tourism",
"Unspecified",
"Utilities",
"Venture Capital / Principal Investing",
"Veterinary",
"Waste Management",
];
*/

/*
var majors_list = [ 
{name:"All",friendlyname:"All Majors"},
{name:"AM",friendlyname:"Applied Mathematics"},
];

// mccormick connect / cso doesnt provide typical positions recruited
var positions_list = [ 
{ friendlyName: 'All', name: ''} // hack
];*/

  /*{ friendlyName: 'AM - Applied Math', name: 'am'},
  { friendlyName: 'BME - Biomedical Eng.', name: 'bme'},
  { friendlyName: 'ChemE - Chemical Engineering', name: 'chem'},
  { friendlyName: 'CivE - Civil Engineering', name: 'civ'},
  { friendlyName: 'CE - Computer Engineering', name: 'ce'},
  { friendlyName: 'CS - Computer Science', name: 'cs'},
  //{ friendlyName: 'CS - Computer Science (BS/McCormick)', name: 'cs'},
  //{ friendlyName: 'CS - Computer Science (BA/Weinberg)', name: 'csa'},
  { friendlyName: 'EE - Electrical Eng.', name: 'ee'},
  { friendlyName: 'EnvE - Environmental Eng.', name: 'enve'},
  { friendlyName: 'IE - Industrial Eng.', name: 'ie'},
  { friendlyName: 'MaDE', name: 'made'},
  { friendlyName: 'MatSci - Material Science', name:'matsci' },
  { friendlyName: 'MechE - Mechanical Engineering', name: 'mech' },
  { friendlyName: 'Non-engineering', name: 'non' } //name: 'noneng' }
  */
