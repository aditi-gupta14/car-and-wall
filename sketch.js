var car, wall1;
var line;
var car1, wall2;
var line1;
var car2, wall3;

function setup() {
  createCanvas(1500,700);

  var car = createSprite(100,100,30,30);
  car.shapeColor = "red";
  car.velocityX = 16;
  var wall1 = createSprite(1400, 100, 40, 130);
  wall1.shapeColor = "white";
  var li = createSprite(1370,100,4,100);
  li.visible = false;
  if(car.isTouching(li)){

    car.shapeColor = "red";
   
     }
   
  var line =  createSprite(800,195,1700,3);
  var car1 = createSprite(100,325,30,30);
  car1.shapeColor = "lightblue";
  car1.velocityX = 12;
  var wall2 = createSprite(1400,325,40,130);
  wall2.shapeColor = "white";
  var line1 =  createSprite(800,445,1700,3);
  var car2 = createSprite(100,570,30,30);
  car2.shapeColor = "pink";
  car2.velocityX = 8;
  var wall3 = createSprite(1400,570,40,130);
  wall3.shapeColor = "white";
  
}

function draw() {
  background("black"); 

  
 
 
  drawSprites();
}