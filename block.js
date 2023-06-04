function drawObstacles(){     // these cases are the levels of the game
  switch(level){
    case 1:
      obstacles = {
        A1B: ["ctx.fillRect(","83,","567,","21,","20)"],
        A2B: ["ctx.fillRect(","103,","556,","33,","33)"],
        A3B: ["ctx.fillRect(","124,","547,","50,","41)"],
        A4B: ["ctx.fillRect(","147,","538,","40,","49)"],
        A5B: ["ctx.fillRect(","166,","525,","79,","62)"],
        A6B: ["ctx.fillRect(","73,","574,","171,","36)"],
        A7B: ["ctx.fillRect(","243,","525,","156,","78)"],
        A8B: ["ctx.fillRect(","10,","157,","341,","28)"],
        A9B: ["ctx.fillRect(","10,","574,","76,","50)"],
        A10B: ["ctx.fillRect(","396,","468,","50,","136)"]
      }
      if(spawned==0){  // stops the enemies from being spawned over and over
        spawnEnemy('1',120,38,null,false);
        spawnEnemy('1',547,501,700,false);
        spawned = 1;
      }
      break; 
    case 2:
      obstacles = {
        A1B: ["ctx.fillRect(","100,","canvas.height-105,","285,","85)"],
        A2B: ["ctx.fillRect(","400,","canvas.height-145,","30,","125)"],
        A3B: ["ctx.fillRect(","450,","canvas.height-200,","55,","45)"],
        A4B: ["ctx.fillRect(","170,","canvas.height-190,","50,","85)"],
        A5B:  ["ctx.fillRect(","650,","canvas.height-250,","55,","45)"]
      }
      if(spawned==0){
        spawnEnemy(3,canvas.height-105-12,232,378);
        spawnEnemy(1,canvas.height-34,460,canvas.width-50);
        spawned=1;
      }
      break; 
    case 3:
      obstacles = {
        A1B: ["ctx.fillRect(","100,","canvas.height-105,","85,","85)"],
        A2B: ["ctx.fillRect(","200,","canvas.height-165,","300,","145)"],
        A3B: ["ctx.fillRect(","250,","canvas.height-240,","55,","45)"],
        A4B: ["ctx.fillRect(","470,","canvas.height-455,","20,","155)"],
        A5B:  ["ctx.fillRect(","600,","canvas.height-98,","55,","45)"]
      }
      if(spawned==0){
        spawnEnemy(2,canvas.height-165-12,325,490);
        spawnEnemy(1,canvas.height-34,670,canvas.width-15);
        spawned=1;
      }
      break;        
    case 4:
      obstacles = {
        A1B: ["ctx.fillRect(","53,","580,","23,","27)"],
        A2B: ["ctx.fillRect(","76,","566,","31,","34)"],
        A3B: ["ctx.fillRect(","105,","549,","30,","51)"],
        A4B: ["ctx.fillRect(","579,","310,","28,","19)"],
        A5B: ["ctx.fillRect(","606,","263,","32,","24)"],
        A6B: ["ctx.fillRect(","237,","471,","54,","129)"],
        A7B: ["ctx.fillRect(","297,","369,","154,","53)"],
        A8B: ["ctx.fillRect(","624,","216,","50,","196)"],
        A9B: ["ctx.fillRect(","375,","323,","50,","48)"],
        A10B: ["ctx.fillRect(","117,","142,","382,","49)"],
        A11B: ["ctx.fillRect(","545,","356,","119,","25)"]
      }
      if(spawned==0){
        spawnEnemy('1',332,310,367,false);
        spawnEnemy('3',546,445,700,false);
        spawnEnemy('3',292,401,401,false);
        spawned=1;
      }
      break;
    case 5:
      obstacles = {
        A1B: ["ctx.fillRect(","52,","566,","355,","37)"],
        A2B: ["ctx.fillRect(","147,","483,","50,","88)"],
        A3B: ["ctx.fillRect(","198,","435,","50,","50)"],
        A4B: ["ctx.fillRect(","247,","336,","210,","104)"],
        A5B: ["ctx.fillRect(","752,","149,","50,","450)"],
        A6B: ["ctx.fillRect(","0,","262,","177,","29)"],
        A7B: ["ctx.fillRect(","209,","112,","418,","22)"],
        A8B: ["ctx.fillRect(","63,","162,","50,","29)"],
        A9B: ["ctx.fillRect(","89,","189,","50,","87)"],
        A10B: ["ctx.fillRect(","0,","125,","90,","137)"],
        A11B: ["ctx.fillRect(","174,","463,","50,","50)"],
        A12B: ["ctx.fillRect(","221,","408,","50,","50)"],
        A13B: ["ctx.fillRect(","428,","415,","50,","26)"],
        A14B: ["ctx.fillRect(","461,","484,","50,","26)"],
        A15B: ["ctx.fillRect(","528,","537,","50,","65)"],
        A16B: ["ctx.fillRect(","387,","558,","373,","50)"]
      }
      if(spawned==0){
        spawnEnemy('3',496,531,700,false);
        spawnEnemy('2',310,255,443,false);
        spawnEnemy('3',229,158,158,false);
        spawnEnemy('2',521,712,null,false);
        spawnEnemy('1',71,223,607,false);
        spawnEnemy('2',78,227,607,false);
        spawnEnemy('3',91,221,607,false);
        spawned=1;
      }
      break;
    case 6:
      obstacles = {
        A1B: ["ctx.fillRect(","10,","223,","259,","22)"],
        A2B: ["ctx.fillRect(", "340,", "10,", "19,", "193)"], 
        A3B: ["ctx.fillRect(","11,","385,","414,","20)"],
        A4B: ["ctx.fillRect(","390,","350,","35,","36)"],
        A5B: ["ctx.fillRect(","424,","316,","58,","89)"],
        A6B: ["ctx.fillRect(","521,","211,","285,","21)"],
        A7B: ["ctx.fillRect(","573,","231,","31,","172)"],
        A8B: ["ctx.fillRect(","10,","551,","599,","28)"],
        A9B: ["ctx.fillRect(","69,","503,","50,","50)"],
        A10B: ["ctx.fillRect(","607,","551,","95,","28)"],
        A11B: ["ctx.fillRect(","665,","476,","36,","79)"],
        A12B: ["ctx.fillRect(","700,","432,","105,","147)"],
        A13B: ["ctx.fillRect(","732,","485,","50,","50)"]
      }
      if(spawned==0){
        spawnEnemy('4',224,377,511,false);
        spawnEnemy('2',166,780,null,false);
        spawnEnemy('1',396,710,780,false);
        spawnEnemy('1',343,37,360,false);
        spawnEnemy('1',349,222,360,false);
        spawnEnemy('3',466,98,617,false);
        spawned=1;
      }
      break;
    default:
      level = 1;
      setTimeout(function(){calc = 0;},1); // needs to be on time out or the hitboxes didn't update
      break;
  }
  if(drawed==0){    // creates new function only once per level, then the function is called repeatedly
    string = "";
    for(var i in obstacles){
      eval("obs = obstacles."+i);
      for(var j in obs){
        string += obs[j];
      }
      string += ";";  
    }
    draw = new Function(string);
    drawed=0;
  }
  draw();
}