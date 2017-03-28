var questionOperations= {
	questionArray:[],
	qno:1,
	addNewQuestion:function(name,options,rans,score){
		
		var question = new Question(this.qno, name, options,rans,score);
		this.questionArray.push(question);
		this.qno++;
	},
	deleteQuestions:function(){
		return this.questionArray = this.questionArray.filter(function(object){
			return !object.isMarkForDeletion;
		});
	},
	sortById:function(){
		return this.questionArray.sort(function(firstObject, secondObject){
			return   secondObject.id - firstObject.id;
		})
	},
	markForDeletion:function(qid){
	var subArray = this.questionArray.filter(function(questionObject){
		return questionObject.id ==qid;
	});
		subArray[0].isMarkForDeletion  = !subArray[0].isMarkForDeletion;
}
	
	
}