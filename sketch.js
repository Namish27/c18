  var path,boy,cash,diamonds,jwellery,sword;
  var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
  var treasureCollection = 0;
  var cashG,diamondsG,jwelleryG,swordGroup,gameover,gameover2;
  var PLAY =1;
  var END =0;
  var gameState=1;

  function preload()
{
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameover=loadImage("gameOver.png");
  
}

  function setup()
{
  
  createCanvas(windowWidth,windowHeight);
  
  
// Moving background
  
  
   path=createSprite(width/2,200);
   path.addImage(pathImg);
   path.velocityY = 4;


//creating boy running
  
   boy = createSprite(width/2,height-20,20,20);
   boy.addAnimation("SahilRunning",boyImg);
   boy.scale=0.08;
  

   cashG=new Group();
   diamondsG=new Group();
   jwelleryG=new Group();
   swordGroup=new Group();

   gameover2=createSprite(200,70,20,50);
   gameover2.addImage(gameover);
   gameover2.scale=0.5;
}

    function draw() 
{

    background(0);
    boy.x = World.mouseX;
  
    edges= createEdgeSprites();
    boy.collide(edges);
  
//code to reset the background
    if(path.y > height )
{
    path.y = height/2;
}
  
   
    if(gameState === PLAY)
{
    //move the ground
    path.velocityY = 8;
    gameover2.visible=false;
}
  
    if (gameState === END)
{
    path.velocityY = 0;
    boy.velocityY=0;
    boy.y=180;
    gameover2.visible=true;
    boy.visible=false;
    treasureCollection=treasureCollection-treasureCollection;
}
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy))
{
    cashG.destroyEach();
    treasureCollection=treasureCollection+50;
      
}
    else if (diamondsG.isTouching(boy))
{
    diamondsG.destroyEach();
    treasureCollection=treasureCollection+100;
      
}   else if(jwelleryG.isTouching(boy))
{
    jwelleryG.destroyEach();
    treasureCollection=treasureCollection+100;
      
}   else
{
    if(swordGroup.isTouching(boy)) 
{
    swordGroup.destroyEach();
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    gameState = END;
}
  
    if(gameover2.isTouching(cashG)/gameover2.isTouching(swordGroup)/
    gameover2.isTouching(diamondsG)/gameover2.isTouching(jwelleryG)
    &gameover2.visible=== true)
{
    swordGroup.destroyEach();
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
}    
  
  
    drawSprites();
    textSize(20);
    fill(255); 
    text("Treasure: "+ treasureCollection,150,30);

}

    function createCash()
{
    if (World.frameCount % 50 == 0) 
{
    var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
    cash.addImage(cashImg);
    cash.scale=0.12;
    cash.velocityY = 3;
    cash.lifetime = 150;
    cashG.add(cash);
}
}

    function createDiamonds()
{
    if (World.frameCount % 80 == 0) 
{
    var diamonds = createSprite(Math.round(random(50, 350),40,10,10));
    diamonds.addImage(diamondsImg);
    diamonds.scale=0.03;
    diamonds.velocityY = 3;
    diamonds.lifetime = 150;
    diamondsG.add(diamonds);
}
}

    function createJwellery() 
{
    if (World.frameCount % 80 == 0) 
{
    var jwellery = createSprite(Math.round(random(50, 350),40,10,10)); 
    jwellery.addImage(jwelleryImg);
    jwellery.scale=0.13;
    jwellery.velocityY = 3;
    jwellery.lifetime = 150;
    jwelleryG.add(jwellery);
}
}

    function createSword()
{
    if (World.frameCount % 150 == 0)
{
    var sword = createSprite(Math.round(random(50, 350),40, 10,10));
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY = 3;
    sword.lifetime = 150;
    swordGroup.add(sword);
}
}
}  