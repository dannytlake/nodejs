const Logger = require('./eventlogger');
const logger = new Logger();

 logger.on('fuck', data => console.log('Called listener', data));

 logger.fucked("hello world");