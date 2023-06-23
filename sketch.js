var playerRunning,playerIdle;
var player;
var backgroundImg,zombieImage,ammoImg;
var backgroundGroup
var backgroundSpeed
var zombieGroup;
var score = 0;
var ammunition = 10;
var bulletImg;
var bulletGroup
var bulletSpeed = 10;
var ammoXAddIdk= 10
var zombie;
var zombie2;
var zombie3;
var zombie4;
var zombie5;
var zombieGroup2;
var zombieGroup3;
var zombieGroup4;
var zombieGroup5;
var gamestate = 'play'
var border1,border2,border3,border4

var shootsound,deadsound,idk,bgmusic,gun;


var gameoverImage;

function preload(){
    playerRunning = loadAnimation("silly_man1.png", "silly_man2.png", "silly_man3.png");
    playerIdle = loadAnimation("silly_man1.png");
    backgroundImg = loadImage("background.png");
    zombieImage = loadImage("zombie.png");
    bulletImg = loadImage("bulletThatSucksLol.png");
    ammoImg = loadImage("ammo.png");
    gameoverImage = loadImage("Sprite-0006.png");


    
    shootsound = loadSound("laserShoot.wav");
    deadsound = loadSound("hitHurt.wav");
    idk = loadSound("powerUp.wav");
    bgmusic = loadSound("better_main_song.ogg");
    gun = loadSound("gun.wav");
}

function setup() {
    createCanvas(1600, 720);

    player = createSprite(1500,300,18,21);
    player.addAnimation("running", playerRunning);
    player.addAnimation("idle", playerIdle);
    //player.debug = true;
    player.setCollider("rectangle",20,0,100,140);

    backgroundSpeed = 10;

    backgroundGroup = new Group();
    zombieGroup = new Group();
    zombieGroup2 = new Group();
    zombieGroup3 = new Group();
    zombieGroup4 = new Group();
    zombieGroup5 = new Group();
    bulletGroup = new Group();

    border1 = createSprite(0,0,width*2,10);
    border2 = createSprite(0,715,width*2,10);
    border3 = createSprite(0,0,10,height*2);
    border4 = createSprite(1600,0,10,height*2);

    border1.visible = false;
    border2.visible = false;
    border3.visible = false;
    border4.visible = false;

    bgmusic.looping = false;
    idk.looping = false;
    shootsound.looping = false;
    deadsound.looping = false;
    gun.looping = false;

    bgmusic.play();
    bgmusic.setVolume(0.5);
}

function draw() {
    //player.x>20&&player.x<1530&&player.y>80&&player.y>60

    // for (let i = ammunition; i < 10; i++) {
    //     ammoCounter();
    //   }
    
    

    if(gamestate === "play"){



        if(keyDown("down")){
            player.y += 10;
            player.changeAnimation("running")
        }
        if(keyDown("up")){
            player.y -= 10;
            player.changeAnimation("running")
        }
        if(keyDown("left")){
            player.x -= 10;
            player.changeAnimation("running")
        }
        if(keyDown("right")){
            player.x += 10;
            player.changeAnimation("running")
        }







        backgroundLoop();
        spawnZombies();
        spawnZombies2();
        spawnZombies3();
        spawnZombies4();
        spawnZombies5();

        if(bulletGroup.isTouching(zombieGroup)){
            zombie.remove();
            score += 1;
            shootsound.play();
        }
        if(bulletGroup.isTouching(zombieGroup2)){
            zombie2.remove();
            score += 1;
            shootsound.play();
        }
        if(bulletGroup.isTouching(zombieGroup3)){
            zombie3.remove();
            score += 1;
            shootsound.play();
        }
        if(bulletGroup.isTouching(zombieGroup4)){
            zombie4.remove();
            score += 1;
            shootsound.play();
        }
        if(bulletGroup.isTouching(zombieGroup5)){
            zombie5.remove();
            score += 1;
            shootsound.play();
        }


        if(frameCount % 200 === 0){
            backgroundSpeed += 1;
            score += 5;
            ammunition += 2;
            idk.play();
        }

        if(zombieGroup.isTouching(player)){
            gamestate = "gameoverLOSERz"
            deadsound.play();
        }
        if(zombieGroup2.isTouching(player)){
            gamestate = "gameoverLOSERz"
            deadsound.play();
        }
        if(zombieGroup3.isTouching(player)){
            gamestate = "gameoverLOSERz"
            deadsound.play();
       
        }
        if(zombieGroup4.isTouching(player)){
            gamestate = "gameoverLOSERz"
            deadsound.play();
        
        }
        if(zombieGroup5.isTouching(player)){
            gamestate = "gameoverLOSERz"   
            deadsound.play();   
        }

    }

    if(gamestate === "gameoverLOSERz"){
        bgmusic.stop();
        backgroundSpeed = 0;
        zombie.remove();
        zombie2.remove();
        zombie3.remove();
        zombie4.remove();
        zombie5.remove();

        textSize(100);
        text(`gameover`, width/2, height/2);
    }



    drawSprites();

    
    textSize(40);
    text(`Ammo:${ammunition}`, 200, 150);
    text(`Score:${score}`, 200, 100);

    player.collide(border1);
    player.collide(border2);
    player.collide(border3);
    player.collide(border4);


}

function backgroundLoop(){
    if(frameCount % 100 === 0){

        
        var background = createSprite(800,360,1600,720);
        background.addImage(backgroundImg);
        background.velocityX = backgroundSpeed;

        background.lifetime = 100;

        background.depth = -10000000000000000000000000000000000000000;

        backgroundGroup.add(background);
    }
}

function spawnZombies(){
    if(frameCount % 150 === 0){
        zombie = createSprite(0,100,40,10);
        zombie.addImage(zombieImage);
        zombie.velocityX = backgroundSpeed;
        // zombie.debug = true;

        zombie.lifetime =500;

        zombie.y = Math.round(random(10,720));

        zombie.depth = player.depth;
        player.depth += 1;



        zombieGroup.add(zombie);
    }
}

function spawnZombies2(){
    if(frameCount % 160 === 0){
        zombie2 = createSprite(0,100,40,10);
        zombie2.addImage(zombieImage);
        zombie2.velocityX = backgroundSpeed;
        // zombie2.debug = true;

        zombie2.lifetime =500;

        zombie2.y = Math.round(random(10,720));

        zombie2.depth = player.depth;
        player.depth += 1;



        zombieGroup2.add(zombie2);
    }
}
function spawnZombies3(){
    if(frameCount % 140 === 0){
        zombie3 = createSprite(0,100,40,10);
        zombie3.addImage(zombieImage);
        zombie3.velocityX = backgroundSpeed;
        // zombie3.debug = true;

        zombie3.lifetime =500;

        zombie3.y = Math.round(random(10,720));

        zombie3.depth = player.depth;
        player.depth += 1;



        zombieGroup3.add(zombie3);
    }
}
function spawnZombies4(){
    if(frameCount % 165 === 0){
        zombie4 = createSprite(0,100,40,10);
        zombie4.addImage(zombieImage);
        zombie4.velocityX = backgroundSpeed;
        // zombie4.debug = true;

        zombie4.lifetime =500;

        zombie4.y = Math.round(random(10,720));

        zombie4.depth = player.depth;
        player.depth += 1;



        zombieGroup4.add(zombie4);
    }
}
function spawnZombies5(){
    if(frameCount % 175 === 0){
        zombie5 = createSprite(0,100,40,10);
        zombie5.addImage(zombieImage);
        zombie5.velocityX = backgroundSpeed;
        // zombie5.debug = true;

        zombie5.lifetime =500;

        zombie5.y = Math.round(random(10,720));

        zombie5.depth = player.depth;
        player.depth += 1;



        zombieGroup5.add(zombie5);
    }
}




function shootBullet(){

    var bullet = createSprite(0,0,800,200);
    bullet.addImage(bulletImg);
    bullet.velocityX = -bulletSpeed;
    // bullet.debug = true;

    bullet.lifetime = 500;

    bullet.x = player.x;
    bullet.y = player.y;

    bullet.depth = player.depth;

    bulletGroup.add(bullet);


    gun.play();


}

// function ammoCounter(){
//     ammoXAddIdk += 20;
//     var ammo
//     ammo = createSprite(0,0,100,100);
//     ammo.addImage(ammoImg);
//     ammo.x = ammoXAddIdk
//     ammo.debug = true;
// }



function keyPressed(){
    if (keyCode === 32&&ammunition>0) {
            shootBullet();
            ammunition -= 1;
      } 
}
