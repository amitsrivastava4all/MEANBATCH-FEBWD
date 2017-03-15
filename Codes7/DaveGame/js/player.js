function Player(img){
	this.x= 70;
	this.y =height-100;
	this.w = 50;this.h= 70;
	this.img = img;
	this.speed = 0;
	this.move=function(){
		this.x = this.x + this.speed;
	}
	
	 
}
