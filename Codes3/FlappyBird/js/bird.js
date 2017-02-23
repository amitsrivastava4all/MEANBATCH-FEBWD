function Bird(birdImg,fallImg){
	this.x = width/2-200;
	this.y = height/2-100;
	this.width = 50;
	this.height = 50;
	this.gravity = 0.5;
	this.velocity = 0.5;
	this.birdImage = birdImg;
	this.fallImg = fallImg;
	this.printBird = function(){
		imageMode(CENTER);
		image(this.birdImage , this.x,this.y, this.width, this.height);
	}
	this.fall= function(){
		if(this.y<=height+25){
		this.velocity +=  this.gravity;
		this.y +=this.velocity;
		}
		else{
			image(this.fallImg , this.x,this.y-50, this.width, this.height);
		}
	}
	this.hit=function(pipe){
		console.log(pipe.x+" "+bird.x+" "+pipe.topY+ " "+pipe.topHeight+" "+bird.y );
		//var distance = dist(bird.x, bird.y,pipe.x, pipe.topY);
		//console.log("Distance ",distance);
		if(bird.y>=pipe.topY && bird.y<=pipe.topHeight){
			
		if(bird.x>=pipe.width + pipe.x){
			return true;
			//alert("hit");
		}
		}
		//if(distance<=25){
			//image(fallImg,bird.x, bird.y, bird.width, bird.height);
		//}
		return false;
	}
	this.up= function(){
		this.velocity = -10;
	}
}