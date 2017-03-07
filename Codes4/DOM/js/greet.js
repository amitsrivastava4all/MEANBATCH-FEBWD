//window.addEventListener("load",function(){
//	alert("I am Lazy");
//});
//window.addEventListener("DOMContentLoaded",function(){
//alert(" I am Eager")
//});
window.addEventListener("load",init);
function init(){
	document.getElementById("firstname").focus();
document.getElementById("greetButton").addEventListener("click",sayWelcome);
document.getElementById("clearBt").addEventListener("click",clearFields);	
}

function clearFields(){
var arrayLike = document.getElementsByClassName("clear");
Array.prototype.forEach.apply(arrayLike,[function(obj){
obj.value="";
}]);
	//for(var i = 0 ; i<arrayLike.length; i++){
//	arrayLike[i].value="";
//}	
	//document.getElementById("firstname").value="";
//document.getElementById("lastname").value="";
document.getElementById("firstname").focus();
document.getElementById("msg").innerHTML="";	
}

function sayWelcome(){
	var firstName = document.getElementById("firstname").value;
	var lastName = document.getElementById("lastname").value;
	document.getElementById("msg").innerHTML = "Welcome "+initCap(firstName) + " "+initCap(lastName);
	
}
function initCap(str){
	return str.charAt(0).toUpperCase()  + str.substring(1).toLowerCase();
}