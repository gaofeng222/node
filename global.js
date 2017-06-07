/*console.log( __filename );
console.log( __dirname )
function printHello(){
	console.log('Hello,world')
}
setInterval(printHello,2000)
console.error();


console.info('程序开始执行');
var counter = 10;
console.log('基数：%d',counter)
console.time('获取数据')
for(var i=0;i<10;i++){
	console.log(i)
}
console.timeEnd('获取数据');
console.info('程序执行完毕')


process.on('exit',function(code){
	setTimeout(function(){
		console.log('该代码不会执行')
	},0)
	console.log('退出码为',code)
})
console.log('程序执行完毕')*/



process.stdout.write('Hello World\n');
process.argv.forEach(function(val,index,array){
	console.log( index + ":" + val )
})
console.log(process.execPath)
console.log(process.platform)
console.log(process.memoryUsage());


















