
function setup(){
    createCanvas(500,500);
    prepareBalls();
    gameTimer();
    gameSpeed = createSlider(1,10,1,1);
    
}

function draw(){
    
    background('black');
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
    ellipse(balls[i].x,balls[i].y,balls[i].width, balls[i].height);
}
}