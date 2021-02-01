var tom 
var mouse
function preload() {
  bg=loadImage("images/garden.png")
  t=loadAnimation("images/cat1.png")
  m=loadAnimation("images/mouse1.png")
  t2=loadAnimation("images/cat2.png","images/cat3.png")
  m3=loadAnimation("images/mouse2.png","images/mouse3.png")
  m2=loadAnimation("images/mouse4.png")
  t3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
   tom=createSprite(700,650,50,50)
   tom.addAnimation("tomSleeping",t)
   tom.scale=0.2
   mouse=createSprite(250,650,50,50)
   mouse.addAnimation("mouseSleeping",m)
   mouse.scale=0.2
  
}


function draw() {

    background(bg);
     if(tom.x-mouse.x<(tom.width-mouse.width)/2){
mouse.addAnimation("mouseDancing",m2)
tom.addAnimation("tomDancing",t3)
mouse.changeAnimation("mouseDancing")
tom.changeAnimation("tomDancing")
tom.x=300
tom.scale=0.2
    }
     
      

    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
  tom.velocityX=-5
  tom.addAnimation("tomRunning",t2)
  tom.changeAnimation("tomRunning")
  mouse.addAnimation("mouseRunning",m3)
  mouse.changeAnimation("mouseRunning")
  
}


}
