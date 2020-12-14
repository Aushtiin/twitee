const logger = require('../modules/logger');


const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;
    logger.error(err.message);
}