var fs = require('fs');
var buf = new Buffer(1024);
console.log('准备打开文件');
fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err)
	}
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
})