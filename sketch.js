var piece;
var pieceNumber = 1;
var player, sword, ghostlyFigure;
var poster,poster1,poster2,poster3;
var poster0;
var posterImg,posterImg2,posterImg3,posterImg4;
var gameState="play";
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13,enemy14,enemy15;
var enemyGroup;
var lives=4;
var enemyLives=4;
var mapImg;
var map;
var lock, lockInput, unlockButton, lockFeedback;
var locked = true;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9;
var wallGroup;
var swordFound = false;
//distancia de tolerancia del player al enemigo para que lo comience a seguir
var enemyDangerZone = 80;
// velocidad de follow del enemigo al personaje
var enemyVel = 3;


function preload(){
posterImg=loadImage("Assets/1.png");
posterImg1=loadImage("Assets/2.png");
posterImg2=loadImage("Assets/3.png");
posterImg3=loadImage("Assets/4.png");
mapImg=loadImage("Assets/mapa.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  map = createSprite(300,300);
enemy1 = createSprite(-40,255,10,10);
enemy2 = createSprite(-55,310,10,10);
//trae pieza de puzzle
enemy3 = createSprite(-45,455,11,11);
enemy4 = createSprite(100,190,10,10);
//trae pieza de puzzle
enemy5 = createSprite(264,187,11,11);
enemy5.lifetime=-1;
enemy6 = createSprite(325,295,10,10);
enemy7 = createSprite(469.5,305,10,10);
//faltan
enemy8 = createSprite(550,300,10,10);
enemy9 = createSprite(600,350,10,10);
enemy10 = createSprite(650,250,10,10);
enemy11 = createSprite(700,400,10,10);
enemy12 = createSprite(750,450,10,10);
enemy13 = createSprite(700,425,10,10);
enemy14 = createSprite(525,425,10,10);
enemy15 = createSprite(900,350,10,10);
//enemy7.shapeColor="red";
lock = createSprite(1090,320,40,10);
player = createSprite(-540,170,20,20);
sword = createSprite(-431,202,6,30);

ghostlyFigure = createSprite(100,300,30,30);

wall1 = createSprite(-585,170,5,95);
wall2 = createSprite(-345,120,470,5);
wall3 = createSprite(-333,215,510,5);
wall4 = createSprite(-110,145,5,40);
wall5 = createSprite(30,160,280,5);
wall6 = createSprite(-75,315,5,200);
wall7 = createSprite(-45,415,57,5);
wall8 = createSprite(-17,315,5,200);
wall9 = createSprite(80,215,185,5);

poster = createSprite(-575,135,20,15);
poster1 = createSprite(390,135,20,15);
poster2 = createSprite(460,605,20,15);
poster3 = createSprite(990,-85,20,15);
poster0 = createSprite(width/2,height/2,200,200)
poster0.visible=false;
poster0.addImage(posterImg);
poster0.addImage(posterImg1);
poster0.addImage(posterImg2);
poster0.addImage(posterImg3);
map.addImage(mapImg);
map.scale=2;


 //input para ingresar el código
 lockInput = createInput("").attribute("placeholder", "Ingresa el código");
 lockInput.position(width / 2 - 110, height / 2 - 80);
 lockInput.hide();
 //botón para ingresar el código
 unlockButton = createButton("Go");
 unlockButton.position(width / 2 - 90, height / 2 - 20);
 unlockButton.hide();
 //si el codigo es correcto o no
 lockFeedback = createElement("h2");
 lockFeedback.html("Código Incorrecto, intenta de nuevo");
 lockFeedback.position(width / 2 - 150, height / 2 - 180);
 lockFeedback.hide();
  
enemyGroup= new Group()
enemyGroup.add(enemy1)
enemyGroup.add(enemy2)
enemyGroup.add(enemy3)
enemyGroup.add(enemy4)
enemyGroup.add(enemy5)
enemyGroup.add(enemy6)
enemyGroup.add(enemy7)
enemyGroup.add(enemy8)
enemyGroup.add(enemy9)
enemyGroup.add(enemy10)
enemyGroup.add(enemy11)
enemyGroup.add(enemy12)
enemyGroup.add(enemy13)
enemyGroup.add(enemy14)
enemyGroup.add(enemy15)


}

function draw() {
  background(180);
  
 

if(gameState==="play"){
  if(keyDown(87)||keyDown(UP_ARROW)){
    player.velocityY=-5;
    if(swordFound===true){
      sword.x=player.x
      sword.y=player.y-20
      sword.rotation=0
    }
  }
  else
  if(keyWentUp(87)||keyWentUp(UP_ARROW)){
    player.velocityY=0;
  }

  if(keyDown(83)||keyDown(DOWN_ARROW)){
    player.velocityY=5;
    if(swordFound===true){
      sword.x=player.x
      sword.y=player.y+20
      sword.rotation=0
    }
  }
  else
  if(keyWentUp(83)||keyWentUp(DOWN_ARROW)){
    player.velocityY=0;
  }
//movimiento a la izquierda
  if(keyDown(65)||keyDown(LEFT_ARROW)){
    player.velocityX=-5;
    if(swordFound===true){
      sword.x=player.x-20
      sword.y=player.y
      sword.rotation=90
    }
  }
  else
  if(keyWentUp(65)||keyWentUp(LEFT_ARROW)){
    player.velocityX=0;
  }
//movimiento a la derecha
  if(keyDown(68)||keyDown(RIGHT_ARROW)){
    player.velocityX=5;
    if(swordFound===true){
      sword.x=player.x+20
      sword.y=player.y
      sword.rotation=90
    }
  }
  else
  if(keyWentUp(68)||keyWentUp(RIGHT_ARROW)){
    player.velocityX=0;
  }
  camera.position.x=player.position.x;
camera.position.y=player.position.y;
poster0.x=camera.position.x;
poster0.y=camera.position.y;
  ghostlyFigure.velocityX=10;
  ghostlyFigure.lifetime=200;

if(player.isTouching(poster)||player.isTouching(poster1)||player.isTouching(poster2)||player.isTouching(poster3)){
poster0.visible=true;
}
else{
  poster0.visible=false
}  

if(player.isTouching(poster)){
poster0.addImage(posterImg)
}

if(player.isTouching(poster1)){
  poster0.addImage(posterImg1)
  }

  if(player.isTouching(poster2)){
    poster0.addImage(posterImg2)
    }

    if(player.isTouching(poster3)){
      poster0.addImage(posterImg3)
      }
//player.collide(enemyGroup);
enemyGroup.collide(enemyGroup);
//le quitan 1 de vida
if(player.collide(enemyGroup)){
lives--
}
text("lives   "+lives,player.x,player.y-20);

sword.overlap(enemyGroup, minusEnemyLive)

// if(sword.isTouching(enemy)){

// }

if(lives===0){
gameState="gameOver";
}

if(player.isTouching(lock)){
  if(locked == true) {
    lockInput.show();
    unlockButton.show();
  } else {
    lockFeedback.show();
  }
} else {
  lockInput.hide();
  unlockButton.hide();
  lockFeedback.hide();
}
//llamar a función
desbloquearPuerta();
chasePlayer(player, enemy1);
chasePlayer(player, enemy2);
chasePlayer(player, enemy3);
chasePlayer(player, enemy4);
chasePlayer(player, enemy5);
chasePlayer(player, enemy6);
chasePlayer(player, enemy7);
chasePlayer(player, enemy8);
chasePlayer(player, enemy9);
chasePlayer(player, enemy10);
chasePlayer(player, enemy11);
chasePlayer(player, enemy12);
chasePlayer(player, enemy13);
chasePlayer(player, enemy14);
chasePlayer(player, enemy15);

if(player.isTouching(sword)){
swordFound = true
}

//aqui termina play
//aqui empieza GameOVER
}
else if(gameState==="gameOver"){
background(0);
}
else if(gameState==="win"){

}
//console log de x+y
//console.log(player.position.x);
//console.log(player.position.y);
  drawSprites();
}

function desbloquearPuerta() {
  unlockButton.mousePressed(() => {
    if (lockInput.value() === "72,79,76,65") {
      locked = false;
      lockInput.hide();
      unlockButton.hide();
      lockFeedback.html("Correcto!");
      //código para quitar puerta o muro (destruir)
      //door.destroy();
    } else {
      lockFeedback.show();
    }
   
  });
 }
 

 function chasePlayer(character, enemy) {
  if (character.x - enemy.x < enemy.width/2 + character.width/2 + enemyDangerZone
  && enemy.x - character.x < enemy.width/2 + character.width/2 + enemyDangerZone
  && character.y - enemy.y < enemy.height/2 + character.height/2 + enemyDangerZone
  && enemy.y - character.y < enemy.height/2 + character.height/2 + enemyDangerZone) {
    //indicador de que entró a zona de peligro: cambio de color a rojo
      character.shapeColor = "red";
      enemy.shapeColor = "red";
  
    //por la izquierda
    if (character.x - enemy.x < enemy.width/2 + character.width/2 + enemyDangerZone && enemy.x - character.x > enemy.width/2 + character.width/2) {
      enemy.x -= enemyVel;
    }
    //por la derecha
    if (enemy.x - character.x < enemy.width/2 + character.width/2 + enemyDangerZone &&  character.x - enemy.x > enemy.width/2 + character.width/2) {
      enemy.x += enemyVel;
    }
    //por arriba
    if (character.y - enemy.y < enemy.height/2 + character.height/2 + enemyDangerZone  &&  enemy.y - character.y > enemy.height/2 + character.height/2) {
      enemy.y -= enemyVel;
    }
    //por abajo
    if (enemy.y - character.y < enemy.height/2 + character.height/2 + enemyDangerZone  &&  character.y - enemy.y > enemy.height/2 + character.height/2) {
      enemy.y += enemyVel;
    }
  }
  else {
    //indicador de que salió de zona de peligro: cambio de color a verde
    character.shapeColor = "green";
    enemy.shapeColor = "green";
  }
 }
 

 function minusEnemyLive (jugador, enemigo) {
  
    if (enemigo.life > -4) {
      
      enemigo.life--;
    }
    else {
      if(enemigo.width===11){
        piece = createSprite(enemigo.x,enemigo.y,50,50)
        piece.lifetime=100;
        piece.scale = 0.05;
        switch(pieceNumber) {
          case 1: 
            piece.addImage(posterImg);
            break;
          case 2: 
            piece.addImage(posterImg1)
            break;
          case 3:
            piece.addImage(posterImg2)
            break;
          case 4:
            piece.addImage(posterImg3)
          break;
          
          default:
            break;  
        }
        pieceNumber++;
        console.log(pieceNumber);
      } 
        
      

      enemigo.destroy();
    }
 }