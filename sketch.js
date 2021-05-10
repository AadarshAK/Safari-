var backI, backS;
var x1=0,x2;
var scrollSpeed=2,offSetX=0;
var hunter, hunterS, appleI,appleS;
var bananaS,bananaI
var orangeI,orangeS
var watermelonI,watermelonS
var Fruits,FruitG
var arrowS,arrowI,arrowG;
var score=0;
var bisonS,bisonI
var tigerI,tigerS
var monkeyS,monkeyI;
var rubyS,rubyI,rubyG;
var as,ai,ag,al=2;

function preload(){
   backI=loadImage("img/forest1_edited.jpg");
   hunter=loadImage("img/hunter.png");
   //hunter.resize(20,20);
   appleI=loadImage("img/apple.png");
   bananaI = loadImage("img/banana.png")
   orangeI = loadImage("img/orange.png");
   watermelonI = loadImage("img/watermelon.png")
   arrowI = loadImage("img/arrow.png")
   bisonI = loadImage("img/bison.png")   
   monkeyI = loadImage("img/monkey.png")
   tigerI = loadImage("img/tiger.png")
   rubyI=loadImage("img/ruby.png")
}

function setup(){
   createCanvas(1780,800);

   hunterS=createSprite(250,425,20,20);
   hunterS.addImage(hunter);
   //hunter.scale=0.1234

   arrowG=new Group();
   FruitG=new Group();
   rubyG=new Group();
   ag=new Group();
}

function draw(){
   background("white");

   image(backI,offSetX,0,width,height);
   image(backI,offSetX+width,0,width,height);

   offSetX--;

   if(offSetX <= -width){
      offSetX=0;
   }

   if(keyDown("s")){
      spawnArrow();
   }

   if(arrowG.isTouching(FruitG)){
      FruitG.destroyEach();
      arrowG.destroyEach();
      score+=10;
   }

   if(arrowG.isTouching(rubyG)){
      rubyG.destroyEach();
      rubyG.destroyEach();
      score+=10;
   }
   
   spawnFruits();
   drawSprites();

   textSize(32);
   fill("green");
   text("Score : "+score,25,width/2);
}

function spawnFruits(){
   if(frameCount%250===0){
      Fruits=createSprite(width+20,Math.round(random(200,300)),20,20);
      Fruits.velocityX=-2;
      Fruits.scale=0.25;

      var fruitRand=Math.round(random(1,4));

      switch(fruitRand){
         case 1 : Fruits.addImage(appleI);
         break;
         
         case 2 : Fruits.addImage(orangeI);
         break;

         case 3 : Fruits.addImage(bananaI);
         break;

         case 4 : Fruits.addImage(watermelonI);
      }
      FruitG.add(Fruits);
   }

   if(frameCount%350===0){
      rubyS=createSprite(width+50,Math.round(random(300,400)),20,20);
      rubyS.addImage(rubyI);
      rubyS.velocityX=-5;
      rubyS.scale=0.25;
      rubyG.add(rubyS);
   }
   
   if(frameCount%160===0){
      as=createSprite(width+20,425,20,20);
      as.velocityX=-2;
      

      var animalRand=Math.round(random(1,3));

      switch(animalRand){
         case 1 : as.addImage(bisonI);
         break;
         
         case 2 : as.addImage(monkeyI);
         break;

         case 3 : as.addImage(tigerI);
      }
      ag.add(as);
   }
   }


function spawnArrow(){
   arrowS=createSprite(250,Math.round(random(200,300)),20,20);
   arrowS.addImage(arrowI);
   arrowS.velocityX=8;
   arrowG.add(arrowS);
}