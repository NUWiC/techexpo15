
 //  compId: will be assigned in a loop
 // that way compId, which is used for accessing picture folders and in urls,
 //  is assigned in only 1 file/table/js array (the grid)

var boothWidth = 75;
var boothHeight = 30;

/* // values specific to THIS floorplan svg image
    // i have code to calculate it as well but fixed for now
  // viewBox="-10 -800 1000 2225"
  $scope.startX = -10;
  $scope.startY = -800;
  $scope.mapWidth = 1100;
  $scope.mapHeight = 2435;
  */

var booth_info = [


{bNum:1,room:"The Grill",x:60,y:-25,rotate:42},
{bNum:2,room:"The Grill",x:35,y:-185,rotate:-40},
{bNum:3,room:"The Grill",x:40,y:-335,rotate:-90},
{bNum:4,room:"The Grill",x:60,y:-534,rotate:0},
{bNum:5,room:"The Grill",x:35,y:-625,rotate:-90},
{bNum:6,room:"The Grill",x:60,y:-775,rotate:0},
{bNum:7,room:"The Grill",x:290,y:-775,rotate:0},
{bNum:8,room:"The Grill",x:625,y:-140,rotate:90},
{bNum:9,room:"The Grill",x:525,y:90,rotate:null},
    
/*{bNum:10,room:"Hallway",x:248,y:947,rotate:null},*/
    
{bNum:10,room:"Hallway",x:660,y:70,rotate:null},
    
{bNum:11,room:"Hallway",x:23,y:923,rotate:0},
{bNum:12,room:"Hallway",x:183,y:1025,rotate:0},
{bNum:13,room:"Hallway",x:283,y:1025,rotate:0},
{bNum:14,room:"Hallway",x:514,y:1025,rotate:0},
    
{bNum:15,room:"Hallway",x:595,y:921,rotate:0},
{bNum:16,room:"Hallway",x:625,y:1025,rotate:0},
{bNum:17,room:"Hallway",x:740,y:1025,rotate:0},
    
{bNum:18,room:"Lakeshore",x:851,y:918,rotate:0},
{bNum:19,room:"Lakeshore",x:845,y:1025,rotate:0},
    
{bNum:20,room:"Lakeshore",x:515,y:1190,rotate:90},
{bNum:21,room:"Lakeshore",x:650,y:1085,rotate:0},
{bNum:22,room:"Lakeshore",x:780,y:1180,rotate:90},
    
{bNum:23,room:"Lakeshore",x:675,y:1370,rotate:-45},
    
{bNum:24,room:"Lakeshore",x:243,y:1335,rotate:55},
{bNum:25,room:"Lakeshore",x:215,y:1275,rotate:-90},
{bNum:26,room:"Lakeshore",x:215,y:1120,rotate:-35},
    
{bNum:27,room:"Northshore",x:410,y:1265,rotate:-90},
{bNum:28,room:"Northshore",x:65,y:830,rotate:0},
{bNum:29,room:"Northshore",x:269,y:830,rotate:0},
{bNum:30,room:"Northshore",x:565,y:845,rotate:0},
    
{bNum:31,room:"Northshore",x:850,y:850,rotate:-42},
    
{bNum:32,room:"Northshore",x:935,y:670,rotate:90},
{bNum:33,room:"Northshore",x:935,y:571,rotate:90},
{bNum:34,room:"Northshore",x:935,y:493,rotate:90},
{bNum:35,room:"Northshore",x:935,y:409,rotate:90},
{bNum:36,room:"Northshore",x:935,y:324,rotate:90},
    
{bNum:37,room:"Northshore",x:850,y:215,rotate:35},
    
{bNum:38,room:"Northshore",x:576,y:216,rotate:0},
{bNum:39,room:"Northshore",x:463,y:214,rotate:0},
{bNum:40,room:"Northshore",x:284,y:217,rotate:0},
    
{bNum:41,room:"Northshore",x:33,y:275,rotate:-52},
    
{bNum:42,room:"Northshore",x:35,y:390,rotate:-90},
{bNum:43,room:"Northshore",x:35,y:480,rotate:-90},
{bNum:44,room:"Northshore",x:35,y:570,rotate:-90},
{bNum:45,room:"Northshore",x:35,y:660,rotate:-90},
{bNum:46,room:"Northshore",x:35,y:750,rotate:-90},
    
{bNum:47,room:"Northshore",x:260,y:540,rotate:90},
{bNum:48,room:"Northshore",x:260,y:440,rotate:90},
{bNum:49,room:"Northshore",x:260,y:340,rotate:90},
    
{bNum:50,room:"Northshore",x:285,y:415,rotate:-90},
{bNum:51,room:"Northshore",x:285,y:515,rotate:-90},
{bNum:52,room:"Northshore",x:285,y:615,rotate:-90},
    
{bNum:53,room:"Northshore",x:455,y:510,rotate:90},
{bNum:54,room:"Northshore",x:455,y:410,rotate:90},
    
{bNum:55,room:"Northshore",x:480,y:485,rotate:-90},
{bNum:56,room:"Northshore",x:480,y:585,rotate:-90},
    
{bNum:57,room:"Northshore",x:705,y:540,rotate:90},
{bNum:58,room:"Northshore",x:705,y:440,rotate:90},
{bNum:59,room:"Northshore",x:705,y:340,rotate:90},
    
{bNum:60,room:"Northshore",x:727,y:415,rotate:-90},
{bNum:61,room:"Northshore",x:727,y:515,rotate:-90},
{bNum:62,room:"Northshore",x:725,y:615,rotate:-90}
];

// reverse drawing svg layer fix
//{  bNum: 13, x: 1175, y: 35, rotate: 45, room: "Hallway", floor: 1  , floor:1},


//----------------------------------------------------------------------
//VERTICAL - adjust heritage room y coordinates
//----------------------------------------------------------------------


