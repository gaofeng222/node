var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(arg1,arg2){
	console.log('some_event 事件触发',arg1,arg2);
})
event.on('some_event',function(arg1,arg2){
	console.log('some_event',arg1,arg2)
})
event.emit('some_event','arg1','arg2')
