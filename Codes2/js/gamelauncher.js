var c ;  
var img ;
var bg;
function preload(){
    img = loadImage("assets/star.png");
    bg = loadImage('assets/sky.gif');
}
function setup(){
    c = createCanvas(500,500);
    c.parent("p1");
    //document.getElementById("p1").appendChild(c);
    //c.position(100, 100);
    prepareBalls();
    gameTimer();
    gameSpeed = createSlider(1,10,1,1);
    //background(bg);
    
}

function draw(){
    imageMode(CORNER);
    background(bg);
    printBalls();
    fill('red');
    textSize(18);
    text("Score Hits "+hits+" Miss "+miss+" Time Left "+timeLeft, 10, 30);
    isTimeEnd();
    speed = gameSpeed.value();
    document.getElementById("currentSpeed").innerHTML=speed;
    
}

function gameOver(){
    var gameStatus = "Game Over";
    balls=[];
    fill('red');
    textSize(38);
    var x = ((width/2) - ((gameStatus.length*19)/2) );
    console.log(x);
    text(gameStatus,x,height/2);
   // noLoop();
}
function isTimeEnd(){
    if(timeLeft<=0){
        clearInterval(myTimer);
        background('black');
        gameOver();
        
    }
}
//var balls=[];
function prepareBalls(){
    for(var i = 1 ; i<=50; i++){
        var ball = new Ball(random(width),random(height));
        balls.push(ball);
    }
}

function mousePressed(){
    for(var i = 0 ; i<balls.length; i++){
        balls[i].ballClicked(i);
    }
    miss++;
    if(isHit){
        miss--;
        isHit = false;
    }
    
}
var timeLeft = 60;
var myTimer ;
function gameTimer(){
    myTimer = setInterval(function(){
        timeLeft --;
    },1000);
}

function printBalls(){
    
for(var i = 0 ; i<balls.length; i++){
    fill(balls[i].color);
    balls[i].move();
    imageMode(CENTER);
    image(img,balls[i].x,balls[i].y,balls[i].width, balls[i].height)
    //ellipse(balls[i].x,balls[i].y,balls[i].width, balls[i].height);
}
}