var buf1 = new Buffer('ABC');
var buf2 = new Buffer(3)
buf1.copy(buf2);
console.log('buffer2 content' + buf2.toString())
var buf3 = new Buffer('Runoob');
var buf4 = buf3.slice(0,2);
console.log('buf4 content:' + buf4.toString())
