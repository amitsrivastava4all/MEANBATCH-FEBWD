var skyImg;
var birdImg;
var bird;
var pipe ;
var pipes=[];
function preload(){
	skyImg = loadImage("assets/sky.png");
	birdImg = loadImage("assets/bird.gif");
	fallImg = loadImage("assets/fire.png")
}
function setup(){
createCanvas(640,480);
bird = new Bird(birdImg,fallImg);	
pipe = new Pipe();
pipes.push(pipe);	
}
function draw(){
	imageMode(CORNER);
	background(skyImg);
	bird.printBird();
	bird.fall();
	printPipes();
	//pipe.printPipe();
	addMorePipe();
	//console.log(frameCount);
}

function printPipes(){
	for(var i =0 ; i<pipes.length; i++){
		if(pipes[i].outofScreen()){
			pipes.splice(i,1);
		}
		if(bird.hit(pipes[i])){
			fill("red");
			textSize(32);
			text("Game Over",width/2, height/2);
			noLoop();
			//alert("Game Over");
		}
		pipes[i].printPipe();
		
	}
}



function addMorePipe(){
	if(frameCount%160==0){
		pipes.push(new Pipe());
	}
}

function keyPressed(){
	const SPACE = 32;
	if(keyCode ===SPACE){
		bird.up();
	}
	//console.log("KeyPressed ",keyCode);
}