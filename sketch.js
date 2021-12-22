

var trex, trex_running, edges;
var groundImage;

function preload(){
  // loading images and animation
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
    groundImage = loadImage("ground2.png")
}
function setup(){
    createCanvas(600,200);
    
    // creating ground 
    ground = createSprite(300,180,600,20)
    ground.addImage("ground",groundImage)
    
    
    // creating trex
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running",trex_running)
     trex.scale = .5
 
    // creating invisible ground
    invisibleGround = createSprite(300,190,600,10)
    invisibleGround.visible = false
    }


function draw(){
    //set background color 
    background("white");
   
    console.log(trex.y)
    // making ground move
    ground.velocityX = -2
   
    // making ground never ending
    if (ground.x < 0){

        ground.x = ground.width/2

    }

   // trex jump when space key pressed
    if(keyDown("space") &&  trex.y >= 160){
          trex.velocityY = -10;

          
    }

   // adding gravity
    trex.velocityY += 0.5
   // making trex touch invisible ground instead of falling through it
    trex.collide(invisibleGround)
    drawSprites();
}