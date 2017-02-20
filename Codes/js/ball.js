var speed = 1; 
function Ball(x,y){
this.x = x ;  // Member Variable Build
this.y = y;
this.width = 50;
this.height = 50;  
this.color = 'green';
   
this.xVelocity = speed; 
this.yVelocity = speed;    
// Member = Local Variable
    
    
this.move = function(){
    if(this.x>=width){
        this.xVelocity = random(-speed);
    }
    else
    if(this.x<=0){
        this.xVelocity = random(speed);
    }
    else
    if(this.y>=height){
        this.yVelocity = random(-speed);
    }
    else
    if(this.y<=0){
        this.yVelocity = random(speed);
    }
    this.x = this.x + this.xVelocity;
    this.y = this.y + this.yVelocity;
}  
this.ballClicked= function(index){
    
    var distance = dist(mouseX,mouseY,this.x, this.y);
    if(distance<=25){
        hits++;
        isHit = true;
        balls.splice(index,1);
        //this.color = 'yellow';
    }
//    else{
//        miss = miss + 1 - balls.length;
//        //miss++;
//    }
}
    
}