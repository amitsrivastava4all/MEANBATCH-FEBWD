var bg;
var player, playerImg;
var fireImg;
var fireArray;
function preload(){
	bg = loadImage("assets/bg.png");
	playerImg = loadImage("assets/char1.5.png");
	fireImg = loadImage("assets/fire.png");
	
}

function setup(){
	
	createCanvas(600,400);
	player  = new Player(playerImg);
	fireArray = prepareFire();
	
}

function draw(){
	background(bg);
	image(player.img,player.x,player.y,player.w,player.h);
	player.move();
	printFire();
}

function keyPressed(){
	if(keyCode==RIGHT_ARROW){
	player.speed = 1;
	}
}

function keyReleased(){
	player.speed=0;
}


function printFire(){
	
	for(var i = 0 ; i<fireArray.length; i++){
		var fireObject = fireArray[i];
		image(fireObject.img,fireObject.x,fireObject.y,fireObject.w,fireObject.h);
		fireObject.move();
		checkCollison(fireObject,player);
	}
}

function prepareFire(){
var fireArray=[];
var pos = 30;	
for(var i = 1; i<=4; i++){
	pos = 130 + pos;
	var fireObject = new Fire(pos,30,fireImg,i);
	fireArray.push(fireObject);
}
	return fireArray;
}

function checkCollison(fireObject, playerObject){
	var xDistance = abs(fireObject.x - playerObject.x) ;
	var yDistance = abs(fireObject.y - playerObject.y);
	var xInWidth = xDistance<=Math.min(fireObject.w,playerObject.w)-20;
	var yInHeight = yDistance<=Math.min(fireObject.h, playerObject.h)-20;
	if(xInWidth && yInHeight){
		
		fill('red');
		textSize(40);
		text("Game Over",100,100);
		noLoop();
		//alert("Game Over");
	}
	
}