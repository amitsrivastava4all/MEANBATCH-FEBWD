function Question(id, name,options,rans,score){
	this.id = id;
	this.name = name;
	this.options = options;
	this.rans = rans;
	this.score  = score;
	this.isMarkForDeletion = false;
}