var buf = new Buffer(256)
len = buf.write('www.baidu.com','utf-8')
console.log('写入字节数' +len)
console.log(buf.toString(0,4))

