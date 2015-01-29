// friendlyName = The name to display in the interface
// name = the csv/json-safe name for filtering etc

var majors_list = [ 
//{name:"All",friendlyName:"All Majors"},
{name:"AM",friendlyName:"Applied Mathematics"},
{name:"BME",friendlyName:"Biomedical Engineering"},
{name:"CS",friendlyName:"Computer Science"},
{name:"CompE",friendlyName:"Computer Engineering"}, // CmpE
{name:"CivE",friendlyName:"Civil Engineering "}, // CE
{name:"ChemE",friendlyName:"Chemical Engineering"}, // ChE
{name:"Econ",friendlyName:"Economics"},
{name:"EE",friendlyName:"Electrical Engineering"},
{name:"EnV",friendlyName:"Environmental Engineering"}, // EnvE
{name:"IE",friendlyName:"Industrial Engineering"},
{name:"MaDE",friendlyName:"Manufacturing and Design Engineering"},
{name:"MBP",friendlyName:"Masters of Biotechnology Program"},
{name:"MEM",friendlyName:"Masters of Engineering Management"},
{name:"MatSci",friendlyName:"Materials Science and Engineering"}, // MatSE
{name:"MechE",friendlyName:"Mechanical Engineering"}, //ME
{name:"ISP",friendlyName:"Integrated Science Program"},
{name:"MSR",friendlyName:"Master of Science in Robotics"},
{name:"MSIT",friendlyName:"MS Information Technology"},
{name:"MSiA",friendlyName:"MS in Analytics"},
{name:"TAM",friendlyName:"Theoretical and Applied Mechanics"},
//{name:"UND",friendlyName:"Undecided"},
//{name:"MIES",friendlyName:"McCormick Integrated Engineering Studies"},
//{name:"MMM",friendlyName:"MSEDI + MBA"},
{name:"MPD",friendlyName:"Masters of Product Design and Development"}, // MPDD ... not sure on this one
{name:"MSEDI",friendlyName:"MS Engineering Design and Innovation"},
{name:"MPM",friendlyName:"Masters of Project Management"},
{name:"Phys",friendlyName:"Applied Physics (PhD)"}, // AP
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

var edulevels_list = [ 
  { friendlyName: 'Bachelors', name: 'bs'},
  { friendlyName: 'BS/MS', name: 'bsms'},
  { friendlyName: 'Masters', name: 'ms'},
  { friendlyName: 'MBA', name: 'mba'},
  { friendlyName: 'PhD', name: 'phd'},
];

var citizenships_list = [ 
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
