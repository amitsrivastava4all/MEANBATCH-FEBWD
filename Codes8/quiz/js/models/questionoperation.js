var questionOperations= {
	questionArray:[],
	qno:0,
	addNewQuestion:function(name,options,rans,score){
		this.qno++;
		var question = new Question(this.qno, name, options,rans,score);
		this.questionArray.push(question);
	}
}