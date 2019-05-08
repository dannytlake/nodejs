const Logger = require('./eventlogger');
const logger = new Logger();

 logger.on('gogetfucked', data => console.log('Called listener', data));

 logger.fucked("hello world");