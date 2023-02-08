const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');





module.exports = function(){


winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint:true }),
  new winston.transports.File({ filename: 'UNcaughtExceptions.log' })
)

process.on('unhandledRejection', (ex) =>{
  throw ex;
});


winston.add(
  new winston.transports.File({ colorize: true, prettyPrint:true, filename: "logfile.log", level: "error" })
);
// winston.add(
//   new winston.transports.MongoDB({ db: "mongodb://localhost/vidly",
//   level: 'info' })
// );


}








// const p = Promise.reject(new Error('Something Failed miserably'));
// p.then(()=> console.log('done'));


// process.on('uncaughtException', (ex) =>{
//   winston.error(ex.message, ex)
//   process.exit(1)
// });
