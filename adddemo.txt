function add(){
var sum = 0;
//console.log(arguments.length);
for(var i = 0; i<arguments.length; i++){
if(typeof arguments[i]==="function"){
arguments[i] = arguments[i]();
}
if(arguments[i] instanceof Array){
for(var j = 0 ; j<arguments[i].length; j++){
sum = sum + (isNaN(parseInt(arguments[i][j]))?0:parseInt(arguments[i][j]));
}
}
else{
sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
}
//console.log(arguments[i]);
}
return sum;
}
