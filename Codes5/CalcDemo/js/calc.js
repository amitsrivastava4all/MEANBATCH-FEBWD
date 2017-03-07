// this is a model , and it contain a logic
//var calcObject = {
//add:function (x,y){
//return parseInt(x) + parseInt(y);
//},
//
//subtract:function (x,y){
//return x - y;
//},
//
//multiply:function (x,y){
//return x * y;
//},
//
//divide:function (x,y){
//return x /y ;
//}
//}
function calculate(x,y,operator){
	return eval(x+operator+y);
}