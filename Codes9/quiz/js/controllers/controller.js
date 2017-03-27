window.addEventListener("load",function(){
	document.getElementById("addBt").addEventListener("click",addQuestion);
	document.getElementById("deleteBt").addEventListener("click",deleteAllMark);
	printQid();
});

function printQid(){
	document.getElementById("qid").innerHTML = questionOperations.qno;
}

function addQuestion(){
	var name = document.getElementById("name").value;
	var options = document.getElementsByName("options");
	var optionArray =[];
	Array.prototype.forEach.apply(options,[function(option){
		optionArray.push(option.value);
	}]);
	var rans = document.getElementById("rightAnswer").value;
	var score= document.getElementById("score").value;
	questionOperations.addNewQuestion(name,optionArray,rans,score);
	printRow(questionOperations.questionArray[questionOperations.questionArray.length-1]);
	printQid();
}

function deleteAllMark(){
	var questionArray = questionOperations.deleteQuestions();
	printTable(questionArray);
}

function printTable(questionArray){
	document.getElementById("tablebody").innerHTML="";
	questionArray.forEach(printRow);
}

function printRow(questionObject){
	var tableBody = document.getElementById("tablebody");
	var row = tableBody.insertRow();
	var index = 0;
	//row.insertCell(0).innerHTML  = questionObject.id;
	//row.insertCell(1).innerHTML = questionObject.name;
	for(var key in questionObject){
		if(key=='options'){
			var optionArr = questionObject[key];
			console.log(optionArr);
			optionArr.forEach(function(option){
				row.insertCell(index).innerHTML	=option;
				index++;
			});	
		}
		else{
		row.insertCell(index).innerHTML = questionObject[key];
		index++;
		}
		
		}
	// Add Operations
		//var deleteImg =  createImageAndAddEvent("images/delete.png",toggleMarkDelete);
		var td  = row.insertCell(index);
		td.appendChild(createImageAndAddEvent("images/delete.png",toggleMarkDelete,questionOperations.qno));
	td.appendChild(createImageAndAddEvent("images/edit.png",editData));
	
	
}

function createImageAndAddEvent(path,method,qidVal){
	var image = document.createElement("img");
	image.setAttribute("qid",--qidVal);
	image.src= path;
	image.className="imgcursor";
	image.addEventListener("click",method);
	return image;
}

function toggleMarkDelete(event){
	var qid  = event.srcElement.getAttribute("qid");
	
	questionOperations.markForDeletion(parseInt(qid));
	var tr= event.srcElement.parentNode.parentNode;
	//alert(tr);
	tr.classList.toggle("rowcolor");
	//alert("Toggle....");
}

function editData(){
	alert("edit");
}