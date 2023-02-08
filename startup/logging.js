const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
  // winston.add(winston.transports.File, { filename: 'logfile.log' });
  // // winston.add(winston.transports.MongoDB, { 
  // //   db: 'mongodb://localhost/vidly',
  // //   level: 'info'
  // // });  
}







// const p = Promise.reject(new Error('Something Failed miserably'));
// p.then(()=> console.log('done'));


// process.on('uncaughtException', (ex) =>{
//   winston.error(ex.message, ex)
//   process.exit(1)
// });
