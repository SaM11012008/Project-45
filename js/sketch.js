var bg, bgSound;
var bread, breadImg, breadGroup;
var heart, heartImg, heartGroup;
var carrot, carrotImg, carrotGroup;
var potato, potatoImg, potatoGroup;
var diamond, diamondImg, diamondGroup;
var rottenMeat, rottenMeatImg, fleshGroup;
var dangerSign, dangerSignImg, dangerSignGroup;
var gameState = 0;

function preload(){

    bg = loadImage("images/bg.jpg");
    breadImg = loadImage("images/bread.png");
    carrotImg = loadImage("images/carrot.png");
    dangerSignImg = loadImage("images/danger-sign.png");
    diamondImg = loadImage("images/diamond.png");
    heartImg = loadImage("images/heart.png");
    potatoImg = loadImage("images/potato.png");
    rottenMeatImg = loadImage("images/rotten meat.png");
    bgSound = loadSound("sounds/bg sound.mp3");
}


function setup() {

    createCanvas(displayWidth/2+945,displayHeight/2+377);
    
    

    breadGroup = new Group;
    //bread = createSprite(200,200); 
    //bread.addImage(breadImg);
    //bread.scale = 0.5;
    //breadGroup.add(bread);

   // carrot = createSprite(400,200);
    //carrot.addImage(carrotImg);
    //carrot.scale = 0.3;
   // carrotGroup.add(carrot);

    //potato = createSprite(600,200);
    //potato.addImage(potatoImg);
    //potato.scale = 0.7;
     // potatoGroup.add(potato);

    //rottenMeat = createSprite(600,400);
    //rottenMeat.addImage(rottenMeatImg);
    //rottenMeat.scale = 0.3;

    //heart = createSprite(800,200);
    //heart.addImage(heartImg);
    //heart.scale = 0.2;

    //diamond = createSprite(200,400);
    //diamond.addImage(diamondImg);
    
    //dangerSign = createSprite(400,400);
    //dangerSign.addImage(dangerSignImg);
    //dangerSign.scale = 0.2;

    Play = new PLAY()
    
 }

function draw() {

    // bgSound.play();

    background(bg);

    if(gameState === 0){
      Play.display()

      Play.button.mousePressed(() =>{
        gameState = 1;
      })

      Play.button2.mousePressed(()=>{
          gameState = 2;
      })
    }

   
    
    if(gameState === 1){
        console.log("Hi");
        Play.button.hide()
        Play.button2.hide()
        Play.title.hide()

        SpawnItems()
    }

    if(gameState === 2){

    }

    drawSprites()

}

function SpawnItems() {

    if(frameCount % Math.round(random(10,50))===0){

        bread = createSprite(Math.round(random(50,1900)),Math.round(random(100,1000))); 
       // bread.addImage(breadImg);
        bread.scale = 0.5;

        var rand = Math.round(random(1,3));
        switch(rand){
            case 1 : bread.addImage(breadImg);
            break;
            case 2 : bread.addImage(carrotImg);
            break;
            case 3 : bread.addImage(potatoImg);
        }

        //bread.velocityX = 0;
        bread.lifetime = 20;
        breadGroup.add(bread);
    }
}