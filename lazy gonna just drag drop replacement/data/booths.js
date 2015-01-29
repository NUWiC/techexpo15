
 //  compId: will be assigned in a loop
 // that way compId, which is used for accessing picture folders and in urls,
 //  is assigned in only 1 file/table/js array (the grid)

var boothWidth = 59;
var boothHeight = 59;

//  compId: will be assigned in a loop
var booth_info = [
{  bNum:  1, x: 240, y: 680, room: "Grand Ballroom", floor: 1, rotate: 0 }, 
{  bNum:  2, x: 240, y: 520, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum:  3, x: 240, y: 360, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum:  4, x: 240, y: 200, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum:  5, x: 225, y: 110, room: "Grand Ballroom", floor: 1, rotate: -45 },
{  bNum:  6, x: 345, y:  30, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum:  7, x: 460, y:  30, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum:  8, x: 575, y:  30, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum:  9, x: 690, y:  30, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 10, x: 805, y:  30, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 11, x: 920, y:  30, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 12, x: 1035, y: 30, room: "Grand Ballroom", floor: 1, rotate: 0 },


// reverse drawing svg layer fix
{  bNum: 20, x: 1150, y: 785, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 19, x: 1150, y: 670, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 18, x: 1150, y: 565, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 17, x: 1150, y: 470, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 16, x: 1150, y: 375, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 15, x: 1150, y: 240, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 14, x: 1150, y: 145, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 13, x: 1175, y: 35,  room: "Grand Ballroom", floor: 1, rotate: 45 },

{  bNum: 21, x: 1040, y: 785, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 22, x: 930, y: 785, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 23, x: 820, y: 785, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 24, x: 710, y: 785, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 25, x: 600, y: 785, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 26, x: 575, y: 660, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 27, x: 690, y: 660, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 28, x: 805, y: 660, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 29, x: 920, y: 660, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 30, x: 1035, y: 660, room: "Grand Ballroom", floor: 1, rotate: 0 }, 
{  bNum: 31, x: 1035, y: 585, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 32, x: 920, y: 585, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 33, x: 805, y: 585, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 34, x: 690, y: 585, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 35, x: 575, y: 585, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 36, x: 575, y: 460, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 37, x: 690, y: 460, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 38, x: 805, y: 460, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 39, x: 920, y: 460, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 40, x: 1035, y: 460, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 41, x: 1035, y: 385, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 42, x: 920, y: 385, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 43, x: 805, y: 385, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 44, x: 690, y: 385, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 45, x: 575, y: 385, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 46, x: 460, y: 385, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 47, x: 460, y: 260, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 48, x: 575, y: 260, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 49, x: 690, y: 260, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 50, x: 805, y: 260, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 51, x: 920, y: 260, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 52, x: 1035, y: 260, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 53, x: 1035, y: 185, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 54, x: 920, y: 185, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 55, x: 805, y: 185, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 56, x: 690, y: 185, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 57, x: 575, y: 185, room: "Grand Ballroom", floor: 1, rotate: 0 },
{  bNum: 58, x: 460, y: 185, room: "Grand Ballroom", floor: 1, rotate: 0 },

//----------------------------------------------------------------------
//VERTICAL - adjust heritage room y coordinates
//----------------------------------------------------------------------

{  bNum: 59, x: 250+520, y: 490+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 60, x: 250+405, y: 490+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 61, x: 250+295, y: 490+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 62, x: 250+180, y: 490+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 63, x:  250+30, y: 490+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 64, x:  250+30, y: 370+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 65, x:  250+30, y: 270+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 66, x:  250+30, y: 155+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 67, x:  250+30, y:  30+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 68, x: 250+160, y:  30+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 69, x: 250+290, y:  30+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 70, x: 250+500, y:  30+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 71, x: 250+670, y:  30+1200, room: "Heritage Room", floor: 1, rotate: 0 },  
{  bNum: 72, x: 250+760, y:  70+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 73, x: 250+760, y: 210+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 74, x: 250+760, y: 310+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 75, x: 250+760, y: 405+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 76, x: 250+560, y: 285+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 77, x: 250+455, y: 285+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 78, x: 250+350, y: 285+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 79, x: 250+245, y: 285+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 80, x: 250+245, y: 200+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 81, x: 250+350, y: 200+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 82, x: 250+455, y: 200+1200, room: "Heritage Room", floor: 1, rotate: 0 },
{  bNum: 83, x: 250+560, y: 200+1200, room: "Heritage Room", floor: 1, rotate: 0 },

];  

//

//var boothWidth = 75;
//var boothHeight = 30;

/* // values specific to THIS floorplan svg image
    // i have code to calculate it as well but fixed for now
  // viewBox="-10 -800 1000 2225"
  $scope.startX = -10;
  $scope.startY = -800;
  $scope.mapWidth = 1100;
  $scope.mapHeight = 2435;
  */
/* 
{bNum:4,room:"The Grill",x:60,y:-534,rotate:0},
{bNum:46,room:"Northshore",x:35,y:750,rotate:-90},
{bNum:1,room:"The Grill",x:60,y:-25,rotate:42},
{bNum:2,room:"The Grill",x:35,y:-185,rotate:-40},
*/

