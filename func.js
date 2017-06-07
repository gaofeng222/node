/*function say(word){
	console.log(word)
}*/
function execute(some_func,value){
	some_func(value)
}
execute(function(word){
	console.log(word)
},'Hello')