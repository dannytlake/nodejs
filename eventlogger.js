const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');


class Logger extends EventEmitter {

  log(msg){
    this.emit('message', { id: uuid.v4() , msg});
  }

  fucked(msg){
    this.emit('gogetfucked', { id: uuid.v4() , msg});
  }
} 


module.exports = Logger;

