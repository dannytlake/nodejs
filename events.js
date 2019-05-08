const EventEmitter = require('events');
const uuid = require('uuid');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('fuck', function() {
    console.log('an event occurred!');
    console.log(uuid.v4());
  }
);
myEmitter.emit('fuck');



