var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log('同步读取:'+data.toString());
console.log('程序执行完毕')