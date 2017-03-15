function Fire(x,y,img,speed){
	this.speed = speed;
	this.x = x;
	this.y = y;
	this.img = img;
	this.w = this.h = 50;
	this.move=function(){
		this.changeDirection();
		this.y = this.y + this.speed;
	}
	
	this.changeDirection=function(){
		if(this.y>height-100){
			this.speed = -this.speed;
		}
		else
		if(this.y<30){
			this.speed = this.speed * -1;
		}	
	}
}