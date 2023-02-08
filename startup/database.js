const winston= require('winston')
const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};
const logger = winston.createLogger(logConfiguration);


const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const config = require('config');
const { loggers } = require('winston');




module.exports = function(){
    const db = config.get('db')
    mongoose.connect(db)
    .then(() => logger.info(`Connected to ${db}...`))
    
    }
    




// module.exports = function(){
//     mongoose.connect('mongodb://localhost/vidly')
//     .then(() => console.log('Connected to MongoDB...'))
    
//     }
    
