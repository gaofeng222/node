var fs = require('fs');
var data = '2017年夏季的时候';
var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data,'utf8');
writeStream.end();
writeStream.on('finish',function(){
	console.log('写入完成')
})
writeStream.on('error',function(){
	console.log('err.stack')
});
console.log('程序执行完毕')
