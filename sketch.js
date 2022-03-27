var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie1 
var heart1 , heart2,heart3;
var zombieGroup;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombie1= loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  heart1ing= loadImage("assets/heart_1.png")
  heart2ong= loadImage("assets/heart_2.png")
  heart3jpg= loadImage("assets/heart_3.png")
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   heart1=createSprite(displayWidth-40,30,30)
   heart1.addImage("heart1",heart1ing)
   heart1.scale = .3
   heart2=createSprite(displayWidth-40,20,20)
   heart2.addImage("heart2",heart2ong)
   heart2.scale = .3
 
   zombieGroup = new Group();
  
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
enemy();

drawSprites();

}

function enemy(){
  if(frameCount%50===0){
    zombie=createSprite(random(600,1300), random(100,400), 50,50)
zombie.addImage(zombie1)
zombie.scale = .1
zombie.velocityX=-2;
zombieGroup.add(zombie);
  }
}